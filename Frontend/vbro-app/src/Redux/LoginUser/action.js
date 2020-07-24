import {
	USER__LOGIN_DATA_SENDING_FAILED,
	SEND_LOGIN_USER_DATA,
	USER_LOGIN_DATA_SENT,
} from "./actionType";
import axios from "axios";
const sendUserData = (payload) => {
	return {
		type: SEND_LOGIN_USER_DATA,
		payload: payload,
	};
};
const userDataSent = (payload) => {
	return {
		type: USER_LOGIN_DATA_SENT,
		payload: payload,
	};
};

const userDataSendFailed = (payload) => {
	return {
		type: USER__LOGIN_DATA_SENDING_FAILED,
		payload: payload,
	};
};

export const sendLoginData = (payload) => (dispatch) => {
    console.log("uareinsendlogin")
	dispatch(sendUserData(payload));
	return axios
		.post("http://localhost:8080/auth/login", {
			...payload,
		},
		{
			params:{}
		},
		{
			headers:{}
		}

		
		)
		.then((res) => res.data.token)
		.then((res) => {
            dispatch(userDataSent(res))
         
        
        })
		.catch((err) => dispatch(userDataSendFailed(err)))
};
