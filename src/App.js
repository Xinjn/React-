import React from 'react'
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        { id: 1, title: '吃饭', type: '' },
        { id: 2, title: '睡觉', type: '' },
        { id: 3, title: '学前端', type: '' }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>我的待办</h1>
        <TodoInput value={this.state.newTodo} />
        <button>新增</button>
        <TodoItem value={this.state.todoList}/>
      </div>
    )
  }
}

export default App;
