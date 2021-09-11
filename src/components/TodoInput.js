import React from 'react';

class TodoInput extends React.Component{
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <>
        <input defaultValue = {this.props.value}/>
      </>
    )
  }
}
export default TodoInput;