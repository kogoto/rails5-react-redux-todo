import { handleActions } from 'redux-actions'
import { CHANGE_ORDER, CHANGE_TITLE, ADD_TODO } from '../constants/ActionTypes'

const initialState = {
  title: '',
  order: 1,
  completed: false,
  disabled: true
}

const form = handleActions({
  [CHANGE_ORDER]: (state, action) => ({
    ...state,
    order: action.payload
  }),

  [CHANGE_TITLE]: (state, action) => ({
    ...state,
    title: action.payload,
    disabled: action.payload.trim() === ''
  }),

  [ADD_TODO]: (state, action) => initialState
}, initialState)

export default form
