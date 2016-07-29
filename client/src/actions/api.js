import { createAction } from 'redux-actions'
import * as types from '../constants/api'
import api from '../api/todos'

export const fetchTodos = createAction(types.FETCH_TODOS, api.fetchTodos)
export const addTodo = createAction(types.ADD_TODO, api.addTodo)
export const deleteTodo = createAction(types.DELETE_TODO, api.deleteTodo)
export const updateTodo = createAction(types.UPDATE_TODO, api.updateTodo)
