import React, { Component } from 'react'
import TodoForm from './containers/TodoForm'
import TodoList from './containers/TodoList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todoリスト</h1>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}
