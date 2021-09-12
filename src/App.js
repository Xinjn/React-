import React from 'react'
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

let id = 0
function idMaker() {
  id += 1
  return id
}

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: [
        { id: idMaker(), title: '吃饭', status: '' },
        { id: idMaker(), title: '睡觉', status: '' },
        { id: idMaker(), title: '学前端', status: '' }
      ]
    }
  }
  //添加列表新数据
  addItem = () => {
    const newItem = { id:idMaker(), title:this.state.newTodo, status: '' }
    this.setState(state =>
      ({
        todoList:state.todoList.concat(newItem)
      })
    )
  }
  //表单数据提交
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
  render() {
    //任务列表数据
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={index}>
          <TodoItem
            value={item}
            //声明回调函数，传给子组件，传入单选项数据
            //手动绑定this指向，不然无法调用this.setState
            onToggle={this.onToggle.bind(this)} 
          />
        </li>
      )
    })

    return (
      <div className="App">
        <h1>我的待办</h1>

        <TodoInput
          value={this.state.newTodo}
          onChange = {this.changeTitle} //声明回调函数，传给子组件，传入表单数据
          onSubmit={this.addItem}
        />
        
        <button onClick={this.addItem} >新增</button>

        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;
