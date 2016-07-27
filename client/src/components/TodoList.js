import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    let todoNodes = this.props.data.map(todo => {
      return (
        <Todo
          id={todo.id}
          title={todo.title}
          order={todo.order}
          completed={todo.completed}
          key={todo.id}
          onTodoCompleted={this.props.onTodoCompleted}
          onTodoDelete={this.props.onTodoDelete}
        /> 
      )
    })

    return (
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th width="10%">完了</th>
              <th width="20%">優先順位</th>
              <th>やること</th>
              <th width="20%"></th>
            </tr>
          </thead>
          <tbody>
            {todoNodes}
          </tbody>
        </table>
      </div>
    )
  }
}

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoCompleted: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
}
