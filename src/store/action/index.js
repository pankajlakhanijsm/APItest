import { FETCH_API_DATA, SEND_API_DATA } from '../action/actions'

export const sendAPIAction = (data) => {
	return {
		type: SEND_API_DATA,
        payload: data
	}
}

export const fetchAPIDataAction = () => {
	return {
		type: FETCH_API_DATA
	}
}