import { handleActions } from 'redux-actions'
import * as ApiAction from '../constants/api'

const initialState = {
  title: '',
  order: 1,
  completed: false
}

const todo = handleActions({
  [ApiAction.ADD_TODO]: {
    next: (state, action) => action.payload,
    throw: (state, action) => initialState
  },

  [ApiAction.UPDATE_TODO]: {
    next: (state, action) => state.id === action.payload.id ? action.payload : state,
    throw: (state, action) => initialState
  }
}, initialState)

const todos = handleActions({
  [ApiAction.FETCH_TODOS]: {
    next: (state, action) => action.payload,
    throw: (state, aciton) => []
  },

  [ApiAction.ADD_TODO]: {
    next: (state, action) => [...state, todo(state, action)],
    throw: (state, action) => action.payload
  },

  [ApiAction.UPDATE_TODO]: {
    next: (state, action) => state.map(s => todo(s, action)),
    throw: (state, action) => action.payload
  },

  [ApiAction.DELETE_TODO]: {
    next: (state, action) => state.filter((t, i) => t.id !== action.payload),
    throw: (state, action) => action.payload
  }
}, [])

export default todos
