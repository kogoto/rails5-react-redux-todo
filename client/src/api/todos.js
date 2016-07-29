import request from 'superagent'

const url = 'http://localhost:8000/todos'

export default {
  fetchTodos: () => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  },

  addTodo: (todo) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send({ todo: todo })
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  },
  
  updateTodo: (todo) => {
    return new Promise((resolve, reject) => {
      request
        .patch(url + '/' + todo.id)
        .send({ todo: todo })
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  },

  deleteTodo: (id) => {
    return new Promise((resolve, reject) => {
      request
        .del(url + '/' + id)
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(id)
          }
        })
    })
  }
}
