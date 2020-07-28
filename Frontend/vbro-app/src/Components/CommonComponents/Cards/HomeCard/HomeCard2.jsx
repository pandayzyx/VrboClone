import React from "react"
import {Link} from  "react-router-dom"



function HomeCard2(props){
    var {title,address,text} = props
  return(
      <>
    <div class="card" style= {{width: "18rem;"}}>
        <Link>
        <img style = {{height:"350px"}} class="card-img-top" src = {address} alt="Card image cap"></img>
        </Link>
    
  </div>
  <div className = "float-left">
  <Link >
  <h6 className ="mt-2 text-dark ml-0" > {title}</h6>
  </Link>
  <p className = "ml-1" >{text}</p>
  </div>
 

  
  
    </>
  )
}
export default HomeCard2