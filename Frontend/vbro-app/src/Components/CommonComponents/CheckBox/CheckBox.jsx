import React from "react"

function CheckBox(props){
    let {onchange,label,id,value} = props
    return(
        <div className = "p-1 py-1 offset-3 d-flex flex-row" >
									 <input id = {id} value = {value}  onChange = {(e)=>onchange(e)} className = "ml-4 mt-1" style = {{height:"25px",width:"10%"}} type = "checkbox"/>
		                           <h5 className = "mt-1 ml-1 text-muted">{label}</h5>
								 </div>
    )
}
export default CheckBox