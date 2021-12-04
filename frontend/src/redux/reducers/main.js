import { combineReducers } from "redux"
import authentication from './authentication'
import others from './others'

const rootReducer = combineReducers({
   auth: authentication,
   others: others
})

export default rootReducer
