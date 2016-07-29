import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  handleToggle(todo, completed) {
    const { onUpdate } = this.props
    todo.completed = completed
    onUpdate(todo)
  }

  render() {
    const { todo, onDelete } = this.props

    return (
      <tr className={todo.completed ? "table-success": ""}>
        <td>
          <input
            type="checkbox"
            onChange={(e) => this.handleToggle(todo, e.target.checked)}
            checked={todo.completed ? "checked": ""}
          />
        </td>
        <td>{todo.order}</td>
        <td>{todo.title}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(todo.id)}
          >削除</button>
        </td>
      </tr>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
