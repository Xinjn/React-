import React from 'react';

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
    console.log(props);
  }
  //获取父组件会回调函数，传入单选项数据
  onToggle = (e) => {
    this.props.onToggle(e,this.props.value)
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
      </>
    )
  }
}
export default TodoItem;