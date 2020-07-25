import React from "react"
import {Link} from  "react-router-dom"
import SignUPModal from './Modals/SignupModal/SignUpModal'
import TravellerLoginModal from './Modals/TravellerLoginModal/TravellerLoginModal'
import OwnerLoginModal from './Modals/OwnerLoginModal/OwnerLoginModal'

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            help:""
        }
    }
    render(){
        return(
            <>
           <SignUPModal/>
           <TravellerLoginModal/>
           <OwnerLoginModal/>
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg text-primary ">
            <Link class="navbar-brand" href="#">
            <img className = "img-fluid" src =  "https://csvcus.homeaway.com/rsrcs/cdn-logos/4.7.0/sitename/vrbo/web/logo.svg" alt = "img"></img>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse offset-4" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link text-primary ml-4 " href="#">Trip Boards<span class="sr-only">(current)</span></Link>
                </li>
                
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle text-primary ml-4" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Login
                  </Link>
                  <div class="dropdown-menu mt-2 " aria-labelledby="navbarDropdownMenuLink">
                    {/* <Link class="dropdown-item" text-primary href="#">Traveller Login</Link> */}
                    <Link class="dropdown-item text-primary ml-4"href="#"  data-toggle = "modal" data-target= "#TravellerLoginModal" >Traveller Login
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item text-primary ml-4"href="#"  data-toggle = "modal" data-target= "#OwnerLoginModal" >Owner Login
                    </Link>
                  </div>
                </li>
                <li class="nav-item">
                  {/* <Link class="nav-link disabled text-primary ml-4" href="#" tabindex="-1" aria-disabled="true">SignuP</Link> */}
                  <button type="button" class="btn btn-light text-primary" data-toggle="modal" data-target="#signupModal">
  SignUp
</button>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle text-primary ml-4" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Help
                  </Link>
                  <div class="dropdown-menu "aria-labelledby="navbarDropdown">
                    <Link to ="/travellerhelp" class="dropdown-item text-primary ml-4" href="#">Traveller Help</Link>
                    <div class="dropdown-divider"></div>
                    <Link to ="/ownerhelp" class="dropdown-item text-primary ml-4" href="#">Owner Help</Link>
                    <div class="dropdown-divider"></div>
                    <Link to ="/propertymanager" class="dropdown-item text-primary ml-4" href="#">Property Manager Help</Link>
                    <div class="dropdown-divider"></div>
                    <Link to ="/trustandsafety" class="dropdown-item text-primary ml-4" href="#">Trust And safety</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <Link to='/listyourproperty'><button style = {{borderRadius:"40px"}} class="btn btn-outline-primary my-2 my-sm-0 ml-4" type="submit">List Your Property</button></Link>
                
                {/* <Link class="nav-link text-primary" href="#">SignUp</Link> */}
                
                </li>
                
              </ul>
              {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
            </div>
          </nav> 
          </>
           ) 
    }
 

}
export default Navbar

