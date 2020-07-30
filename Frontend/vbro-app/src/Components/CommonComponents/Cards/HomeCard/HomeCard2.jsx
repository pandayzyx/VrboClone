import React from "react"
import {Link} from  "react-router-dom"
import styles from './HomeCard2.module.css'


function HomeCard2(props){
    var {title,address,text} = props
  return(
      <>
    <div className={styles.zoom} style= {{width: "18rem;"}}>
        <Link>
        <img style = {{height:"350px"}} className="card-img-top" src = {address} alt="Card image cap"></img>
        </Link>
    
  </div>
  <div className = "float-left">
  <Link >
  <h6 className ="mt-2 text-dark ml-0" > {title}</h6>
  </Link>
  <p className = "ml-1 text-muted" >{text}</p>
  </div>
 

  
  
    </>
  )
}
export default HomeCard2