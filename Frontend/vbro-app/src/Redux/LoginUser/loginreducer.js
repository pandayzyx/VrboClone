import {
	USER__LOGIN_DATA_SENDING_FAILED,
	SEND_LOGIN_USER_DATA,
	USER_LOGIN_DATA_SENT,
} from "./actionType";

const initState = {
    isSending:false,
    isSent:false,
    isError:false,
    uesername:"",
    isUserLoggedIn:true,
    token:""

}
export const loginreducer = (state = initState,action)=>{
    
switch(action.type){
    case SEND_LOGIN_USER_DATA:{
        return{
            ...state,
            isSending:true,
            username:action.payload.username
        }
    }
    case USER_LOGIN_DATA_SENT:{
        return{
            ...state,
            isSent:true,
            token:action.payload
           
        }
    }
    case USER__LOGIN_DATA_SENDING_FAILED:{
        return{
            ...state,
            message:action.payload.message,
            isError:true
        }
    }

    default:{
        return{
            ...state
        }
    }
}
}
