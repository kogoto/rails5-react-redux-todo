import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeOrder, changeTitle, addTodo } from '../actions'

class TodoForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    const form = this.props.form
    const { changeOrder, changeTitle, addTodo } = this.props

    return (
      <div className="row">
        <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group col-md-2">
            <input
              className="form-control"
              type="number"
              value={form.order}
              onChange={(e) => changeOrder(e.target.value)} 
            />
          </div>
          <div className="form-group col-md-8">
            <input
              className="form-control"
              type="text"
              value={form.title}
              onChange={(e) => changeTitle(e.target.value)} 
            />
          </div>
          <div className="form-group col-md-2">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={form.disabled}
              onClick={() => addTodo(form)}>
              登録
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { form: state.form }
}

TodoForm = connect(
  mapStateToProps,
  { changeOrder, changeTitle, addTodo }
)(TodoForm)

export default TodoForm
