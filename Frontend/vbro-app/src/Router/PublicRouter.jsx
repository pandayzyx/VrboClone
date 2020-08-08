import React from "react"
import {Switch,Route} from "react-router-dom"
import Home from "./RouterComponents/Home.jsx"
import ListingPage from  "./RouterComponents/ListingPage"
import OwnerHelp from  "./RouterComponents/NavBarRoutes/OwnerHelp"
import  TravellerHelp from "./RouterComponents/NavBarRoutes/TravelerHelp"
import TrustAndSafety from  "./RouterComponents/NavBarRoutes/TrustAndSafety"
import PropertyManagerHelp from  "./RouterComponents/NavBarRoutes/PropertManagerHelp"
import EntityPage from  "./RouterComponents/EntityPage"
import ListYourProperty from "./RouterComponents/NavBarRoutes/ListYourProperty";
import BookingPage from   "./RouterComponents/BookingPage"
import PaymentSucccess from  "./RouterComponents/PaymentSuccess"


function PublicRouter(){
    return(
        <Switch>
        <Route exact path = "/" render = {(props)=><Home {...props}/>} ></Route>
        <Route path = "/travellerhelp" render = {()=><TravellerHelp/>}  ></Route>
        <Route exact path = "/listing" render={(props)=><ListingPage{...props}/>} ></Route>
        <Route exact path = "/payment" render={(props)=><PaymentSucccess{...props}/>} ></Route>
        
        <Route exact path = "/listing/:id" render={(props)=><EntityPage{...props}/>} ></Route>
        <Route  path = "/listing/:id/checkout" render={(props)=><BookingPage{...props}/>} ></Route>
        <Route path = "/ownerhelp" render = {()=> <OwnerHelp/>}  ></Route>
        <Route path = "/propertymanager" render = {()=><PropertyManagerHelp/> } ></Route>
        <Route path = "/trustandsafety" render = {()=><TrustAndSafety/>}  ></Route>
        <Route exact path = "/listyourproperty" render = {()=><ListYourProperty/>}  ></Route>
        </Switch>
    )
}
export default PublicRouter