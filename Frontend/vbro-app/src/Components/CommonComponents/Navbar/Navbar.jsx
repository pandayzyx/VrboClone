import React from "react";
import { Link } from "react-router-dom";
import SignUPModal from "./Modals/SignupModal/SignUpModal";
import TravellerLoginModal from "./Modals/TravellerLoginModal/TravellerLoginModal";
import OwnerLoginModal from "./Modals/OwnerLoginModal/OwnerLoginModal";
import { connect } from "react-redux";

import {userLogout} from "../../../Redux/LoginUser/action";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      help: "",
    };
  }

  handlelogout = () => {
    this.props.userLogout();
  }

  render() {
    let { isUserLoggedIn, username } = this.props;
    return (
      <>
        <SignUPModal />
        <TravellerLoginModal />
        <OwnerLoginModal />
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg text-primary ">
          <Link to="/" class="navbar-brand" href="#">
            <img
              className="img-fluid"
              src="https://csvcus.homeaway.com/rsrcs/cdn-logos/4.7.0/sitename/vrbo/web/logo.svg"
              alt="img"
            ></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse offset-4"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link text-primary ml-4 " href="#">
                  Trip Boards<span class="sr-only">(current)</span>
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle text-primary ml-4"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </Link>
                <div
                  class="dropdown-menu mt-2 "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {/* <Link class="dropdown-item" text-primary href="#">Traveller Login</Link> */}
                  <Link
                    class="dropdown-item text-primary"
                    href="#"
                    data-toggle="modal"
                    data-target="#TravellerLoginModal"
                  >
                    Traveller Login
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link
                    class="dropdown-item text-primary"
                    href="#"
                    data-toggle="modal"
                    data-target="#OwnerLoginModal"
                  >
                    Owner Login
                  </Link>
                </div>
              </li>

              {/* This component is shown when user is loggen in */}

              {isUserLoggedIn && (
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle text-primary ml-4"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {username}
                  </Link>
                  <div
                    class="dropdown-menu mt-2 "
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {/* <Link class="dropdown-item" text-primary href="#">Traveller Login</Link> */}
                    <Link
                      class="dropdown-item text-primary"
                      href="#"
                      data-toggle="modal"
                      data-target="#TravellerLoginModal"
                    >
                      inbox
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link
                      class="dropdown-item text-primary"
                      href="#"
                      data-toggle="modal"
                      data-target="#OwnerLoginModal"
                    >
                      My trips
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link
                      class="dropdown-item text-primary"
                      href="#"
                      data-toggle="modal"
                      data-target="#OwnerLoginModal"
                    >
                      My profile
                    </Link>
                    <div class="dropdown-divider"></div>

                    <Link
                      class="dropdown-item text-primary"
                      href="#"
                      data-toggle="modal"
                      data-target="#OwnerLoginModal"
                      onClick={this.handlelogout}
                    >
                      Logout
                    </Link>
                  </div>
                </li>
              )}

              {/* This signup button is shown when user is not logged in */}

              {!isUserLoggedIn && (
                <li class="nav-item">
                  <button
                    type="button"
                    class="btn btn-light text-primary"
                    data-toggle="modal"
                    data-target="#signupModal"
                  >
                    SignUp
                  </button>
                </li>
              )}
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle text-primary ml-4"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Help
                </Link>
                <div class="dropdown-menu " aria-labelledby="navbarDropdown">
                  <Link
                    to="/travellerhelp"
                    class="dropdown-item text-primary"
                    href="#"
                  >
                    Traveller Help
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item text-primary" href="#">
                    Owner Help
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item text-primary" href="#">
                    Property Manager Help
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item text-primary" href="#">
                    Trust And safety
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <Link to="/listyourproperty">
                  <button
                    style={{ borderRadius: "40px" }}
                    class="btn btn-outline-primary my-2 my-sm-0 ml-4"
                    type="submit"
                  >
                    List Your Property
                  </button>
                </Link>

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
    );
  }
}

const MapStateToProps = (state) => {
  return {
    username: state.login.username,
    isUserLoggedIn: state.login.isUserLoggedIn,
  };
};

const MapDisaptchToProps = (dispatch) => {
	return {
		userLogout: (payload) => dispatch(userLogout(payload)),
	};
};
export default connect(MapStateToProps, MapDisaptchToProps)(Navbar);
