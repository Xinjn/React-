import React from 'react';
import '../css/TodoInput.css'

class TodoInput extends React.Component{
  constructor(props) {
    super(props)
  }
  //获取父组件会回调函数，调用函数
  sumbit = (e) => {
    if (e.keyCode === 13) {
      this.props.onSubmit.call()
    }
  }
  //获取父组件会回调函数，传入表单数据
  changeTitle = (e) => {
    this.props.onChange(e) 
  }
  render() {
    return (
      <>
        <input
          className="TodoInput"
          type="text"
          defaultValue={this.props.value}
          onChange = {this.changeTitle}
          onKeyDown={this.sumbit}
        />
      </>
    )
  }
}
export default TodoInput;