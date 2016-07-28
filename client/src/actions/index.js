import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'

export const changeOrder = createAction(types.CHANGE_ORDER)
export const changeTitle = createAction(types.CHANGE_TITLE)
export const addTodo = createAction(types.ADD_TODO)
export const deleteTodo = createAction(types.DELETE_TODO)
export const toggleTodo = createAction(types.TOGGLE_TODO)
