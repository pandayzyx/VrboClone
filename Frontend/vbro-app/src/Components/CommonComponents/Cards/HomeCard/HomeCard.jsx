import React from "react"

function HomeCard(props){
    let {name,address} = props
  return(
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src = {address} alt="Card image cap"/>
    <div class="card-body">
  <h5 class="card-title">{name}</h5>
     
    </div>
  </div>
  )
}
export default HomeCard