import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import firstReducer from './firstReducer'


export default history =>
  combineReducers({
    router: connectRouter(history),
    firstReducer
  })