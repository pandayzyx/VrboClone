import{USER_DATA_SENDING_FAILED,SEND_USER_DATA,USER_DATA_SENT} from "./actionType"

const initState = {
    isSending:false,
    isSent:false,
    isError:false,
    message:"",
    isUserRegistered:false

}

export const registerreducer = (state = initState,action)=>{
switch(action.type){
    case SEND_USER_DATA:{
        return{
            ...state,
            isSending:true
        }
    }
    case USER_DATA_SENT:{
        console.log(action.payload)
       let res  =  action.payload.data.isExistingUser
        return{
            ...state,
            isSent:true,
            isUserRegistered:res,
            message:action.payload,

        }
    }
    case USER_DATA_SENDING_FAILED:{
       
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
