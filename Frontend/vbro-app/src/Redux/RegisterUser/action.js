
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


export const sendData = payload=>dispatch=>{
    console.log("u are in registration")
    dispatch(sendUserData(payload))
    return axios.post("http://localhost:8080/auth/register",
    {
        ...payload
    }
    
    
    ).then(res=>res.data.message).then(res=>dispatch(userDataSent(res)))
    .catch(err=>dispatch(userDataSendFailed(err)))
}