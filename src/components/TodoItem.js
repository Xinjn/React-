import React from 'react';
import '../css/TodoItem.css'

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
    
  }
  //获取父组件会回调函数，传入单选项数据
  onToggle = (e) => {
    console.log('切换类型');
    this.props.onToggle(e,this.props.value)
  }
  //获取父组件会回调函数，传入单选项数据
  onDelete = (e) => {
    console.log('删除任务');
    this.props.onDelete(e,this.props.value)
  }
  render() {
    return (
      <div className="TodoItem">
        <input
          type="checkbox"
          checked={
            this.props.value.status === 'completed'
          }
          onChange={this.onToggle}
        />
        <span className='title'>{this.props.value.title}</span>
        <button onClick={this.onDelete}>删除</button>
      </div>
    )
  }
}
export default TodoItem;