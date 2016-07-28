import { handleActions } from 'redux-actions'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants/ActionTypes'

let nextTodoId = 0

const initialState = {
  title: '',
  order: 1,
  completed: false
}

const todo = handleActions({
  [ADD_TODO]: (state, action) => ({
    ...action.payload,
    id: nextTodoId++
  }),

  [TOGGLE_TODO]: (state, action) => state.id === action.payload ? ({
    ...state,
    completed: !state.completed
  }) : state
}, initialState)

const todos = handleActions({
  [ADD_TODO]: (state, action) => [...state, todo(state, action)],

  [TOGGLE_TODO]: (state, action) => state.map(s => todo(s, action)),

  [DELETE_TODO]: (state, action) => state.filter((t, i) => t.id !== action.payload)
}, [])

export default todos
