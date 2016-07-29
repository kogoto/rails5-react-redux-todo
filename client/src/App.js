import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoForm from './containers/TodoForm'
import TodoList from './containers/TodoList'
import * as actionCreators from './actions/api'

export default class App extends Component {
  componentDidMount() {
    this.handleFetchTodos()
  }

  handleFetchTodos() {
    this.props.fetchTodos()
  }

  handleAddTodo(todo) {
    this.props.addTodo(todo)
  }

  handleUpdateTodo(todo, completed) {
    this.props.updateTodo(todo)
  }

  handleDeleteTodo(id) {
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <div className="App">
        <h1>Todoリスト</h1>
        <TodoForm
          onAddTodo={this.handleAddTodo.bind(this)}
        />
        <TodoList
          onUpdateTodo={this.handleUpdateTodo.bind(this)}
          onDeleteTodo={this.handleDeleteTodo.bind(this)}
        />
      </div>
    )
  }
}

App = connect(null, actionCreators)(App)

export default App
