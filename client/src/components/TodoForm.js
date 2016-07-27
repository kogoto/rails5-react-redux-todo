import React, { Component, PropTypes } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { order: 1, title: '' }
  }

  handleOrderChange(e) {
    this.setState({ order: e.target.value })
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const order = this.state.order
    const title = this.state.title.trim()

    if (!order || !title) {
      return
    }

    this.props.onTodoSubmit({ order: order, title: title, completed: false })
    this.setState({ order: 1, title: '' })
  }

  render() {
    return (
      <div className="row">
        <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group col-md-2">
            <input
              className="form-control"
              type="number"
              value={this.state.order}
              onChange={(e) => this.handleOrderChange(e)}
            />
          </div>
          <div className="form-group col-md-8">
            <input
              className="form-control"
              type="text"
              value={this.state.title}
              onChange={(e) => this.handleTitleChange(e)}
            />
          </div>
          <div className="form-group col-md-2">
            <input className="btn btn-primary" type="submit" value="登録" />
          </div>
        </form>
      </div>
    )
  }
}

TodoForm.propTypes = {
  onTodoSubmit: PropTypes.func.isRequired
}
