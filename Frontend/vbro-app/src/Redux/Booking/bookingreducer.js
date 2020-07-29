import {
	BOOKING_DATA_FAILED,
	BOOKING_DATA_SEND,
	BOOKING_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
	isSending: false,
	isSent: false,
	isError: false,
	dataBookingPage: [],
};

export const bookingreducer = (state = initState, action) => {
	switch (action.type) {
		case BOOKING_DATA_SEND: {
			return {
				...state,
				isSending: true,
			};
		}
		case BOOKING_DATA_SUCCESS: {
			console.log("action.payload", action.payload.propCount);
			return {
				...state,
				isSent: true,
				dataBOOKINGPage: [...action.payload],
				
			};
		}
		case BOOKING_DATA_FAILED: {
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
