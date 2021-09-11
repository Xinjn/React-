import React from 'react';

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <ul>
          {
            this.props.value.map(item => {
              return (
                <li key={item.id}>
                  {item.title}
                </li>
              )
            })
          }
        </ul>
      </>
    )
  }
}
export default TodoItem;