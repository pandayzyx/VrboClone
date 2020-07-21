import React from "react"
import {Switch,Route} from "react-router-dom"
import OwnerHelp from  "./RouterComponents/OwnerHelp"
import TravellerHelp from  "./RouterComponents/TravelerHelp"
import TrustAndSafety from  "./RouterComponents/TrustAndSafety"
import PropertyManagerHelp from  "./RouterComponents/PropertyManagerHelp"
import ListYourProperty from  "./RouterComponents/ListYourProperty"


function PublicRouter(){
    return(
        <Switch>
        <Route path = "/"></Route>
        <Route path = "/travellerhelp" render = {()=><TravellerHelp/>}  ></Route>
        <Route path = "/ownerhelp" render = {()=> <OwnerHelp/>}  ></Route>
        <Route path = "/propertymanager" render = {()=><PropertyManagerHelp/> } ></Route>
        <Route path = "/trustandsafety" render = {()=><TrustAndSafety/>}  ></Route>
        <Route path = "/listyourproperty" render = {()=><ListYourProperty/>}  ></Route>
        </Switch>
    )
}
export default PublicRouter