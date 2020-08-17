import {
  USER__LOGIN_DATA_SENDING_FAILED,
  SEND_LOGIN_USER_DATA,
  USER_LOGIN_DATA_SENT,
  USER_LOGOUT,
  USER_VERIFY_AUTH,
  USER_VERIFY_AUTH_FAILED
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

const userLogout = (payload) => {
  return {
    type: USER_LOGOUT,
    payload: payload,
  };
};

const userLogoutFailed = (payload) => {
  return {
    type: USER_LOGOUT,
    payload: payload,
  };
};

const userVerifyAuth = (payload) => {
  return {
    type: USER_VERIFY_AUTH,
    payload: payload
  };
};

const userVerifyAuthFailed = (payload) => {
  return {
    type: USER_VERIFY_AUTH_FAILED,
    payload: payload
  };
};

export const sendLoginData = (payload) => (dispatch) => {
  console.log("uareinsendlogin");
  console.log("payload", payload);
  dispatch(sendUserData(payload.data));
  return axios
    .post(`${process.env.REACT_APP_AUTH_HOST}/login`, {
      ...payload.data,
    })
    .then((res) => {
      console.log("res", res);
      if (!res.data.isLoginSuccess) {
        payload.IncorrectPasscallback();
        throw Error("Incorrect Pass Handled");
      }
      return res;
    })
    .then((res) => {
      res.statusParam = "isLoginSuccess";
      dispatch(userDataSent(res));
    })
    .catch((err) => {
      if (err.message !== "Incorrect Pass Handled") {
        dispatch(userDataSendFailed(err));
      }
    });
};

export const sendGoogleLoginData = (payload) => (dispatch) => {
  console.log("Google oauth");
  console.log("payload", payload);
  dispatch(sendUserData(payload.data));
  return axios
    .post(`${process.env.REACT_APP_AUTH_HOST}/oauth/google`, {
      ...payload.data,
    })
    .then((res) => {
      res.statusParam = "isAuthenticated";
      dispatch(userDataSent(res));
    })
    .catch((err) => dispatch(userDataSendFailed(err)));
};

export const sendFacebookLoginData = (payload) => (dispatch) => {
  console.log("Facebook oauth");
  console.log("payload", payload);
  dispatch(sendUserData(payload.data));
  return axios
    .post(`${process.env.REACT_APP_AUTH_HOST}/oauth/facebook`, {
      ...payload.data,
    })
    .then((res) => {
      res.statusParam = "isAuthenticated";
      dispatch(userDataSent(res));
    })
    .catch((err) => dispatch(userDataSendFailed(err)));
};

export const logout = (payload) => (dispatch) => {
  return axios
    .post(`${process.env.REACT_APP_AUTH_HOST}/logout`, {
      ...payload
    })
    .then((res) => dispatch(userLogout(res.data)))
    .catch((err) => dispatch(userLogoutFailed(err)));
};

export const verifyAuth = () => (dispatch) => {
  return axios
    .get(`${process.env.REACT_APP_AUTH_HOST}/verifyAuth`)
    .then((res) => dispatch(userVerifyAuth(res.data)))
    .catch((err) => dispatch(userVerifyAuthFailed(err)));
};
