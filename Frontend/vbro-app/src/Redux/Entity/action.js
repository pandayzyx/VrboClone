import {
  ENTITY_DATA_FAILED,
  ENTITY_DATA_SEND,
  ENTITY_DATA_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const sendEntityData = (payload) => {
  return {
    type: ENTITY_DATA_SEND,
    payload: payload,
  };
};

const EntityDataSuccess = (payload) => {
  return {
    type: ENTITY_DATA_SUCCESS,
    payload: payload,
  };
};

const EntityDataSendFailed = (payload) => {
  return {
    type: ENTITY_DATA_FAILED,
    payload: payload,
  };
};

export const getEntityData = (payload) => (dispatch) => {
  dispatch(sendEntityData(payload));
  let {url, params} = payload;

  return axios
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
      dispatch(EntityDataSuccess(res));
    })
    .catch((err) => dispatch(EntityDataSendFailed(err)))
};
