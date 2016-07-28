import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import Todo from '../components/Todo'

class TodoList extends Component {
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props

    let todoNodes = todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onTodoCompleted={toggleTodo}
          onTodoDelete={deleteTodo}
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

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

TodoList = connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(TodoList)

export default TodoList
