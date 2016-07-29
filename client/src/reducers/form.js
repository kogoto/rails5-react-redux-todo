import { handleActions } from 'redux-actions'
import * as UiAction from '../constants/ui'
import * as ApiAction from '../constants/api'

const initialState = {
  title: '',
  order: 1,
  completed: false,
  disabled: true
}

const form = handleActions({
  [UiAction.CHANGE_ORDER]: (state, action) => ({
    ...state,
    order: action.payload
  }),

  [UiAction.CHANGE_TITLE]: (state, action) => ({
    ...state,
    title: action.payload,
    disabled: action.payload.trim() === ''
  }),

  [ApiAction.ADD_TODO]: (state, action) => initialState
}, initialState)

export default form
