import React from 'react';

class TodoInput extends React.Component{
  constructor(props) {
    super(props)
  }
  sumbit = (e) => {
    if (e.keyCode === 13) {
      console.log('提交')
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