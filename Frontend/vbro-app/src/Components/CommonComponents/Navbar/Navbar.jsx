import React from "react"
import {Link} from  "react-router-dom"
import SignUPModal from './Models/SignupModal/SignUpModal'
import TravellerLoginModal from './Models/TravellerLoginModal/TravellerLoginModal'

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
            <nav class="navbar navbar-expand-lg navbar-light bg-light text-primary ">
            <Link class="navbar-brand offset-4" href="#">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link text-primary ml-4" href="#">Trip Boards<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                <button class="btn btn-outline-success my-2 my-sm-0 ml-4" type="submit">Search</button>
                {/* <Link class="nav-link text-primary" href="#">SignUp</Link> */}
                
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
                    <Link class="dropdown-item text-primary ml-4" href="#">Owners Login</Link>
                  </div>
                </li>
                <li class="nav-item">
                  {/* <Link class="nav-link disabled text-primary ml-4" href="#" tabindex="-1" aria-disabled="true">SignuP</Link> */}
                  <button type="button" class="btn btn-light" data-toggle="modal" data-target="#signupModal">
  SignUP
</button>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle text-primary ml-4" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Help
                  </Link>
                  <div class="dropdown-menu "aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item text-primary ml-4" href="#">Traveller Help</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item text-primary ml-4" href="#">Owner Help</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item text-primary ml-4" href="#">Property Manager Help</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item text-primary ml-4" href="#">Trust And safety</Link>
                  </div>
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

