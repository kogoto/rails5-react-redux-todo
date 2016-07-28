import { combineReducers } from 'redux'
import form from './form'
import todos from './todos'

const reducers = combineReducers({
  form, todos
})

export default reducers
