import {
  LISTING_DATA_FAILED,
  LISTING_DATA_SEND,
  LISTING_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
  isSending: false,
  isSent: false,
  isError: false,
  dataListingPage: [],
};

export const listingreducer = (state = initState, action) => {
  switch (action.type) {
    case LISTING_DATA_SEND: {
      return {
        ...state,
        isSending: true,
      };
    }
    case LISTING_DATA_SUCCESS: {
      console.log("action.payload", action.payload);
      return {
        ...state,
        isSent: true,
        dataListingPage: [...action.payload],
      };
    }
    case LISTING_DATA_FAILED: {
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
