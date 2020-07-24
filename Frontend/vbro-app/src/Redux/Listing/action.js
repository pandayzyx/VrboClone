import {
	LISTING_DATA_FAILED,
	LISTING_DATA_SEND,
	LISTING_DATA_SUCCESS,
} from "./actionTypes";
import axios from "axios";
const sendListingData = (payload) => {
	return {
		type: LISTING_DATA_SEND,
		payload: payload,
	};
};
const listingDataSuccess = (payload) => {
	return {
		type: LISTING_DATA_SUCCESS,
		payload: payload,
	};
};

const listingDataSendFailed = (payload) => {
	return {
		type: LISTING_DATA_FAILED,
		payload: payload,
	};
};

export const getListData = (payload) => (dispatch) => {
	dispatch(sendListingData(payload));
	return axios
		.get(
			"http://6c023c51f27c.ngrok.io/properties?",
			{
				...payload,
			},
			{
				params: {pageNum:2},
			},
			{
				headers: {},
			}
		)
		.then((res) => { 
            return res.data})
		.then((res) => {
			dispatch(listingDataSuccess(res));
		})
		.catch((err) => dispatch(listingDataSendFailed(err)));
};
