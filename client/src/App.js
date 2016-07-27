import React, { Component, PropTypes } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import $ from 'jquery'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
  }

  componentDidMount() {
    this.loadTodosFromServer()
  }

  loadTodosFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: (data) => {
        this.setState({ todos: data })
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString())
      }
    })
  }

  handleTodoSubmit(todo) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: { todo: todo },
      success: (data) => {
        this.loadTodosFromServer()
      },
      error: (xhr, status, err) => {
        console.error(this.proprs.url, status, err.toString())
      }
    })
  }

  handleTodoCompleted(todo, completed) {
    $.ajax({
      url: this.props.url + '/' + todo.props.id,
      dataType: 'json',
      method: 'PATCH',
      data: { todo: { completed: completed } },
      success: (data) => {
        todo.setState({ completed: data.completed })
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString())
      }
    })
  }

  handleTodoDelete(id) {
    $.ajax({
      url: this.props.url + '/' + id,
      dataType: 'json',
      method: 'DELETE',
      success: (data) => {
        this.loadTodosFromServer()
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString())
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todoリスト</h1>
        <TodoForm onTodoSubmit={this.handleTodoSubmit.bind(this)} />
        <TodoList
          data={this.state.todos}
          onTodoCompleted={this.handleTodoCompleted.bind(this)}
          onTodoDelete={this.handleTodoDelete.bind(this)}
        />
      </div>
    )
  }
}

App.propTypes = {
  url: PropTypes.string.isRequired
}
