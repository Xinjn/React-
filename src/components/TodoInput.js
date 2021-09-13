import React, { createRef } from 'react';
import '../css/TodoInput.css'

class TodoInput extends React.Component{
  constructor(props) {
    super(props)
  }

  getRef = React.createRef()
  //获取父组件会回调函数，调用函数
  sumbit = (e) => {
    if (e.keyCode === 13) {
      this.props.onSubmit.call()
      //清空缓存
      this.getRef.current.value = ''
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
          ref={this.getRef} //清空缓存
        />
      </>
    )
  }
}
export default TodoInput;