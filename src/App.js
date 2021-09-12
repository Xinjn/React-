import React from 'react'
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import UserDialog from './components/UserDialog';
import { getCurrentUser } from './components/leanCloud';

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
    console.log(getCurrentUser());
  }

  //添加列表新数据
  addItem = () => {
    console.log('新增数据')
    const newItem = { id:idMaker(), title:this.state.newTodo, status: '' }
    this.setState(state =>
      ({
        todoList:state.todoList.concat(newItem)
      })
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
    console.log(item);
    
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
          { this.state.user.id ? null : <UserDialog /> }
      </div>
    )
  }
}

export default App;
