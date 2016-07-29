import { createAction } from 'redux-actions'
import * as types from '../constants/ui'

export const changeOrder = createAction(types.CHANGE_ORDER)
export const changeTitle = createAction(types.CHANGE_TITLE)
