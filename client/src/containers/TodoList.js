import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/ui'
import Todo from '../components/Todo'

class TodoList extends Component {
  render() {
    const { todos } = this.props

    let todoNodes = todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdate={this.props.onUpdateTodo.bind(this)}
          onDelete={this.props.onDeleteTodo.bind(this)}
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
  onUpdateTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

TodoList = connect(
  mapStateToProps,
  actionCreators
)(TodoList)

export default TodoList
