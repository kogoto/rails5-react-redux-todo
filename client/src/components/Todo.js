import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
    const { todo, onTodoCompleted, onTodoDelete } = this.props

    return (
      <tr className={todo.completed ? "table-success": ""}>
        <td>
          <input
            type="checkbox"
            onChange={() => onTodoCompleted(todo.id)}
            checked={todo.completed ? "checked": ""}
          />
        </td>
        <td>{todo.order}</td>
        <td>{todo.title}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => onTodoDelete(todo.id)}
          >削除</button>
        </td>
      </tr>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoCompleted: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
}
