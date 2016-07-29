import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import reducer from '../reducers'

const logger = createLogger()

const middleware = [
  logger,
  promiseMiddleware
]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export default store

