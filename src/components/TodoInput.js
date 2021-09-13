import React, { createRef, useRef } from 'react';
import '../css/TodoInput.css'

/*
class TodoInput extends React.Component{
  constructor(props) {
    super(props)
  }
  //声明Ref引用
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
*/


//获取父组件会回调函数，调用函数
function sumbit(props,getRef,e){
    if (e.keyCode === 13) {
      props.onSubmit.call()
       //清空缓存
      getRef.current.value = ''
    }
}
//获取父组件会回调函数，传入表单数据
function  changeTitle(props,e){
    props.onChange(e)
  }


// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  //声明useRef引用
  const getRef = useRef(null)
  return <input
            className="TodoInput"
            type="text"
            defaultValue={props.value}
            onChange = {changeTitle.bind(null,props)}
            onKeyDown={sumbit.bind(null,props,getRef)}
            ref={getRef}//清空缓存
          />
}