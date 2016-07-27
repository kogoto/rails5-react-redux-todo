import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { completed: false }
  }

  render() {
    return (
      <tr className={this.state.completed ? "table-success": ""}>
        <td>
          <input
            type="checkbox"
            onChange={(e) => this.props.onTodoCompleted(this, e.target.checked)}
            checked={this.state.completed ? "checked": ""}
          />
        </td>
        <td>{this.props.order}</td>
        <td>{this.props.title}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onTodoDelete(this.props.id)}
          >削除</button>
        </td>
      </tr>
    )
  }
}

Todo.propTypes = {
  onTodoCompleted: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
}
