
import{USER_DATA_SENDING_FAILED,SEND_USER_DATA,USER_DATA_SENT} from "./actionType"
import axios from "axios"
const sendUserData =(payload)=>{
    return{
        type:SEND_USER_DATA,
        payload:payload
    }
    
}
const  userDataSent = (payload)=>{
    return{
        type:USER_DATA_SENT,
        payload:payload
    }
}

const userDataSendFailed =(payload)=>{
    return{
    type:USER_DATA_SENDING_FAILED,
    payload:payload
    }
}


export const sendRegisterData = payload=>dispatch=>{
    console.log("u are in registration")
    dispatch(sendUserData(payload))
    return axios.post("http://2239cc759ca5.ngrok.io/checkStatus",
    {
        ...payload
    }
    
    
    )
    .then(res=>dispatch(userDataSent(res)))
    .catch(err=>dispatch(userDataSendFailed(err)))
}