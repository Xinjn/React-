import React from 'react';

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
    console.log(props);
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
      <>
        <input
          type="checkbox"
          checked={
            this.props.value.status === 'completed'
          }
          onChange={this.onToggle}
        />
        {this.props.value.title}
        <button onClick={this.onDelete}>删除</button>
      </>
    )
  }
}
export default TodoItem;