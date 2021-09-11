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
        { id: idMaker(), title: '吃饭', type: '' },
        { id: idMaker(), title: '睡觉', type: '' },
        { id: idMaker(), title: '学前端', type: '' }
      ]
    }
  }
  addItem = () => {
    const newItem = { id:idMaker(), title:this.state.newTodo, type: '' }
    this.setState(state =>
      ({
        todoList:state.todoList.concat(newItem)
      })
    )
  }
  changeTitle = (e) => { 
    this.setState(state =>
      ({
        newTodo:state.newTodo = e.target.value
      })
    )
  }
  render() {
    return (
      <div className="App">
        <h1>我的待办</h1>

        <TodoInput
          value={this.state.newTodo}
          onChange = {this.changeTitle} //声明回调函数，传给子组件，传入表单数据
          onSubmit={this.addItem}
        />
        
        <button onClick={this.addItem} >新增</button>

        <TodoItem value={this.state.todoList}/>
      </div>
    )
  }
}

export default App;
