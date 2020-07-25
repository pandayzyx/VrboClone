import React from "react"
import {Switch,Route} from "react-router-dom"
import Home from  "./RouterComponents/Home"
import OwnerHelp from  "./RouterComponents/NavBarRoutes/OwnerHelp"
import  TravellerHelp from "./RouterComponents/NavBarRoutes/TravelerHelp"
import TrustAndSafety from  "./RouterComponents/NavBarRoutes/TrustAndSafety"
import PropertyManagerHelp from  "./RouterComponents/NavBarRoutes/PropertManagerHelp"
import ListYourProperty from "./RouterComponents/NavBarRoutes/ListYourProperty";


function PublicRouter(){
    return(
        <Switch>
        <Route exact path = "/" render = {()=><Home/>} ></Route>
        <Route path = "/travellerhelp" render = {()=><TravellerHelp/>}  ></Route>
        <Route path = "/ownerhelp" render = {()=> <OwnerHelp/>}  ></Route>
        <Route path = "/propertymanager" render = {()=><PropertyManagerHelp/> } ></Route>
        <Route path = "/trustandsafety" render = {()=><TrustAndSafety/>}  ></Route>
        <Route path = "/listyourproperty" render = {()=><ListYourProperty/>}  ></Route>
        </Switch>
    )
}
export default PublicRouter