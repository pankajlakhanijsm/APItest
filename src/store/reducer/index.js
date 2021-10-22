import { combineReducers } from "redux";
import APIReducer from './reducer'

const rootReducer = combineReducers({
	data: APIReducer,
})
export default rootReducer;