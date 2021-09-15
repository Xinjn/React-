import React from 'react'
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import UserDialog from './components/UserDialog';
import { getCurrentUser, Logout, TodoModel, getData, deleteData} from './components/leanCloud';

//ID自增
let id = 0
function idMaker() {
  id += 1
  return id
}

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user:getCurrentUser() || {},
      newTodo: '',
      todoList: []
    }
  }

  //出生渲染列表
  componentDidMount() {
    let user = getCurrentUser()
    if (user) {
      TodoModel.getByUser().then(data => {
        this.setState(state => ({
          todoList:state.todoList = data
        }))
      })
    }
  }

  //添加列表新数据
  addItem = () => {
    console.log('新增数据')
    const newItem = {
      title: this.state.newTodo,
      status: null,
      deleted: false
    }
    //添加到数据库
    TodoModel.create(newItem,
      (data) => {
        //添加id(不使用自增id)
        newItem.id = data.id
        console.log(newItem);
        this.setState(state => ({
          todoList:state.todoList.concat(newItem)
        }))
        console.log(this.state.todoList);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  
  //表单数据单项绑定
  changeTitle = (e) => { 
    this.setState(state =>
      ({
        newTodo:state.newTodo = e.target.value
      })
    )
  }

  //未完成/完成切换
  onToggle(e,item){
    item.status = item.status === "completed" ? '' : "completed"
    this.setState(state => ({
      todoList:state.todoList
    }))
    console.log(item);
    
  }
  //删除功能
  onDelete(e,item) {
    item.delete = !item.delete
    this.setState(state => ({
      todoList:state.todoList
    }))
    deleteData(item)
  }
  //注册：触发setSatet更新UI重新渲染
  onSign(user) {
    this.setState(state => ({
      user:state.user = user
    }))
  }
  //登陆：触发setSatet更新UI重新渲染
  onLogin(user) { 
    this.setState(state => ({
      user:state.user = user
    }))
  }
  //注销：触发setSatet更新UI重新渲染
  onlogout() {
    this.setState(state => ({
      user:state.user = {}
    }))
    Logout()
  }
  render() {
    //任务列表数据:添加过滤条件delete
    let todos = this.state.todoList.filter(item=>!item.delete).map((item, index) => {
      return (
        <li key={index}>
          <TodoItem
            value={item}
            //声明回调函数，传给子组件，传入单选项数据
            //手动绑定this指向，不然无法调用this.setState
            onToggle={this.onToggle.bind(this)}
            //声明回调函数，传给子组件，传入数据
            onDelete={this.onDelete.bind(this)}
          />
        </li>
      )
    })

    return (
      <div className="App">
        <h1>
          {this.state.user.username || '我'}的待办
          {this.state.user.id
            ?
            <button onClick={this.onlogout.bind(this)}>注销</button>
            : null}
        </h1>
        
        <TodoInput
          value={this.state.newTodo}
          onChange = {this.changeTitle} //声明回调函数，传给子组件，传入表单数据
          onSubmit={this.addItem}
        />
        
        <button onClick={this.addItem}>新增</button>

        <ol className="todoList">
          {todos}
        </ol>
        {this.state.user.id
          ? null :
          <UserDialog
            onSign={this.onSign.bind(this)}
            onLogin={this.onLogin.bind(this)}
          />
        }
      </div>
    )
  }
}

export default App;
