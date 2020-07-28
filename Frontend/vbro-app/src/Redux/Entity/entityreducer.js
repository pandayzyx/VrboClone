import {
	ENTITY_DATA_FAILED,
	ENTITY_DATA_SEND,
	ENTITY_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
	isSending: false,
	isSent: false,
	isError: false,
	dataEntityPage: [],
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
			console.log("action.payload", action.payload.propCount);
			return {
				...state,
				isSent: true,
				dataEntityPage: [...action.payload],
				
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
