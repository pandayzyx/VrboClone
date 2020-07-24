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
  console.log("uareinsendlogin");
  console.log("payload", payload);
  dispatch(sendUserData(payload.data));
  return axios
    .post("http://localhost:3000/login", {
		...payload.data
	})
	.then(res => {
		console.log("res", res);
		if (!res.data.isLoginSuccess) {
			payload.IncorrectPasscallback();
			throw Error("Incorrect Pass Handled");
		}
		return res;
	})
    .then((res) => {
      dispatch(userDataSent(res));
    })
    .catch((err) => {
		if (err.message !== "Incorrect Pass Handled") {
			dispatch(userDataSendFailed(err))
		}
	});
};
