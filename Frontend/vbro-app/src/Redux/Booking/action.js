import {
  BOOKING_DATA_FAILED,
  BOOKING_DATA_SEND,
  BOOKING_DATA_SUCCESS,
} from "./actionTypes";

import axiosInstance from "../axiosInstance";

import { bindActionCreators } from "redux";

const sendBookingData = (payload) => {
  return {
    type: BOOKING_DATA_SEND,
    payload: payload,
  };
};

const BookingDataSuccess = (payload) => {
  return {
    type: BOOKING_DATA_SUCCESS,
    payload: payload,
  };
};

const BookingDataSendFailed = (payload) => {
  return {
    type: BOOKING_DATA_FAILED,
    payload: payload,
  };
};

export const getBookingData = (payload) => (dispatch) => {
  dispatch(sendBookingData(payload));
  let {url, params} = payload;

  return axiosInstance
    .get(
      url,
      {
        params: params
      },
    )
    .then((res) => {
		console.log(res);
      return res.data;
    })
    .then((res) => {
      dispatch(BookingDataSuccess(res));
    })
    .catch((err) => dispatch(BookingDataSendFailed(err)))
};

export const postBookingData = (payload) => (dispatch) => {
  dispatch(sendBookingData(payload));
  let {url, params} = payload;

  return axiosInstance
    .post(
      {...payload},
      url,
      {
        params: params
      },
    )
    .then((res) => {
		console.log(res);
      return res.data;
    })
    .then((res) => {
      dispatch(BookingDataSuccess(res));
    })
    .catch((err) => dispatch(BookingDataSendFailed(err)))
};
