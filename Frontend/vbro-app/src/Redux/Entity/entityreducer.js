import {
	ENTITY_DATA_FAILED,
	ENTITY_DATA_SEND,
	ENTITY_REVIEW_DATA_SUCCESS,
	ENTITY_DATA_SUCCESS,
	ENTITY_TOTAL_PRICE_DATA_SUCCESS
} from "./actionTypes";

const initState = {
	isSending: false,
	isSent: false,
	isError: false,
	dataEntityPage: {},
	reviews: [],
	totalSum: '',
	isBookingDateAvailable:false
};

export const entityreducer = (state = initState, action) => {
	switch (action.type) {
		case ENTITY_DATA_SEND: {
			return {
				...state,
				isSending: true,
			};
		}
		case ENTITY_DATA_SUCCESS: {
			console.log("action.payload", action.payload);
			return {
				...state,
				isSent: true,
				dataEntityPage: action.payload,
				
			};
		}
		case ENTITY_REVIEW_DATA_SUCCESS: {
			console.log("action.payload", action.payload);
			return {
				...state,
				isSent: true,
				reviews: action.payload,
			};
		}
		case ENTITY_TOTAL_PRICE_DATA_SUCCESS: {
			console.log("action.payload", action.payload);
			return {
				...state,
				isSent: true,
				totalSum: action.payload.totalPrice,
			};
		}
		case ENTITY_DATA_FAILED: {
			return {
				...state,
				isError: true,
			};
		}

		default: {
			return {
				...state,
			};
		}
	}
};
