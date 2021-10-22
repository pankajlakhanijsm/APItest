import { FETCH_API_DATA, SEND_API_DATA } from '../action/actions'

const initialState = {
	data: {}
}

const APIReducer = (state = initialState, action) => {
	switch(action.type){
		case FETCH_API_DATA: 
        return {
			...state,
			data: action.payload
		}

        case SEND_API_DATA: 
        return {
			...state,
			data: action.payload
		}
		
		default: 
        return state
	}
}

export default APIReducer;