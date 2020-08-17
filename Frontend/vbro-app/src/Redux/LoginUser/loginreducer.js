import {
  USER__LOGIN_DATA_SENDING_FAILED,
  SEND_LOGIN_USER_DATA,
  USER_LOGIN_DATA_SENT,
  USER_LOGOUT,
  USER_VERIFY_AUTH,
  USER_VERIFY_AUTH_FAILED
} from "./actionType";

const initState = {
  isSending: false,
  isSent: false,
  isError: false,
  username: "",
  email: "",
  isUserLoggedIn: false,
};
export const loginreducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_LOGIN_USER_DATA: {
      return {
        ...state,
        isSending: true,
        username: action.payload.username,
      };
    }
    case USER_LOGIN_DATA_SENT: {
      console.log(action);
      const { email, name } = action.payload.data.user;
      const { statusParam } = action.payload;
      return {
        ...state,
        isSent: true,
        email: email,
        username: name,
        isUserLoggedIn: action.payload.data[statusParam],
      };
    }
    case USER__LOGIN_DATA_SENDING_FAILED: {
      return {
        ...state,
        message: action.payload.message,
        isError: true,
      };
    }

    case USER_LOGOUT: {
      return {
        ...state,
        username: "",
        email: "",
        isUserLoggedIn: false,
      };
    }

    case USER_VERIFY_AUTH: {
      console.log("verify action.payload", action.payload);
      const {user, isAuthenticated} = action.payload;
      return {
        ...state,
        email: user.email,
        isUserLoggedIn: isAuthenticated,
      };
    }

    case USER_VERIFY_AUTH_FAILED: {
      return {
        ...state,
        username: "",
        email: "",
        isUserLoggedIn: false,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
