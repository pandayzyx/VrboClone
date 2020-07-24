import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { sendRegisterData } from "../../../../../Redux/RegisterUser/action";
import {connect} from 'react-redux'
import { sendLoginData } from "../../../../../Redux/LoginUser/action"
var passwordValidator = require("password-validator");
var validator = require("email-validator");
var schema = new passwordValidator();

class SignUPModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			googleToken: "",
			email: "",
			fbisLoggedIn: "",
			fbuserID: "",
			fbname: "",
			fbemail: "",
			fbpicture: "",
			firstName: "",
			lastName: "",
			password: "",
			isDefaultComponent: true,
			isValidMailNew: false,
			isMailAlreadyPresnt: false,
			isValidEmail: true,
			isNewPasswordValid: true,
			isUserLoggedIn: "",
			isGoogleLoggedIn: "",
		};
	}

	responseGoogle = (response) => {
		console.log(response);
	};

	responseFacebook = (response) => {
		console.log(response);
		this.setState({
			fbisLoggedIn: true,
			fbuserID: response.userID,
			fbname: response.name,
			fbemail: response.email,
			fbpicture: response.picture.data.url,
		});
	};

	handleChange = (e) => {
		console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	checkValidEmail = async() => {
		let {isUserRegistered}  = this.props
		console.log(isUserRegistered)
	
		let { email } = this.state;
		let {sendRegisterData} = this.props
		
		if (
			validator.validate(email)
			//"response from databse is that its new mail"
		) {  await sendRegisterData({email:email})
		     if(isUserRegistered){
				this.setState({
					isMailAlreadyPresnt:true,
					isDefaultComponent:false
				});
			 }
			 else if(isUserRegistered === false){
				this.setState({
					isMailAlreadyPresnt:false,
					isDefaultComponent:false,
					isValidMailNew:true
				});
			 }
			
		}  else {
			this.setState({
				isValidEmail: false,
			});
		}
	};
	checkLogin = () => {
        
	};

	checkSignUp = () => {
		let { password } = this.state;
		schema
			.is()
			.min(7) // Minimum length 7
			.is()
			.max(32) //Max Length 32
			.has()
			.letters() //Should have letters
			.has()
			.digits() // Must have digits
			.has();
		if (schema.validate(password)) {

		
		} else {
			this.setState({
				isNewPasswordValid: false,
			});
		}

	};

	render() {
		let {
			isValidMailNew,
			isMailAlreadyPresnt,
			firstName,
			lastName,
			password,
			email,
			isValidEmail,
			isDefaultComponent,
			isNewPasswordValid,
		} = this.state;
		return (
			<>
				<div
					className="container"
					style={{ marginTop: "40px" }}
					class="modal fade"
					id="signupModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog mt-5">
						<div class="modal-content">
							<div class="modal-header bg bg-primary">
								<h3
									style={{ marginTop: "30px" }}
									class="modal-title text-white"
									id="exampleModalLabel"
								>
									{isValidMailNew === true
										? "Create Your Account"
										: "Log in or sign up on Vrbo"}
								</h3>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body col-10 offset-1 pb-4 shadow-lg">
								{/* This is the default component that will be dispalyed in the modal */}
								{isDefaultComponent && (
									<div className="row card">
										<div className="col-12">
											<input
												name="email"
												value={this.state.email}
												onChange={(e) => this.handleChange(e)}
												className="form-control mt-4"
												placeholder="Email Address"
											/>
											{!isValidEmail && (
												<p className="text-danger">
													Please Enter a Valid Email
												</p>
											)}
										</div>
										<div className="col-6 offset-2 mt-5">
											<button
												onClick={() => this.checkValidEmail()}
												style={{ borderRadius: "40px" }}
												class={
													email === ""
														? "btn btn-primary btn-block disabled ml-4 py-3"
														: "btn btn-primary btn-block ml-4 py-3"
												}
											>
												Get Started
											</button>
											<br></br>
											<br></br>
											<p className="offset-3">Or continue with</p>
											<div className="offset-1 d-flex">
												<GoogleLogin
													clientId="232104637002-j10cga87s4j7mgsnan80h24suv229o1i.apps.googleusercontent.com"
													render={(renderProps) => (
														<img
															style={{ height: "80px", width: "80px" }}
															className="img-fluid"
															src="data:image/png;base64,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"
															alt="google"
															onClick={renderProps.onClick}
															disabled={renderProps.disabled}
														></img>
													)}
													buttonText="Login"
													onSuccess={this.responseGoogle}
													onFailure={this.esponseGoogle}
													cookiePolicy={"single_host_origin"}
												/>

												<FacebookLogin
													appId="2958340954291415"
													autoLoad={true}
													fields="name,email,picture"
													callback={this.responseFacebook}
													cssClass="border-0 bg bg-white ml-4"
													icon={
														<img
															style={{ height: "40px", width: "40px" }}
															classname="header img-fluid"
															alt="facebook"
															src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEUYd/L///8AbPH7/P8AcvIAbvGnwfkAY/AAcPF8pPbn7/0PdfJ+qfcAavGaufgAaPHM3Pvt8/7c6P24zvo8hfM5gfNyofWZvPjR3/tLi/Ozy/osfvPD1vutxvmRtPdXlPUAV/BmmvWHsPd6z/5iAAAFBUlEQVRogcXba3ejIBAGYBKhtaJNNOZic9vm///IRXNTMzC8YE7n0549bp5FRGEYxAyNpDocT5tzvddCCL2vz5vT8VAl8O8I6OpqldcyVWkqtWhhQwstU/M3ss5X1ZvkcpmvtUr1VRyH1qnS63xZTi0nhrWqfd3gnjfeSy63TZE60Wek82br1XAPOculcjd21HQl82wCOdssJOJ2tlxsWJuRy6+FBNlryMUXc8/d8jYNczs73QbLuxrq33FoVe+C5OQS5V7ti32IWeWqUZFuG6qxvths8o8M7+F+SPmDyXkxidtGkQNyMsmdvodqyM6m5Kye5k7fQ9bUa4WQq/20sKH3xHP2Kk8P0/SL/A6YpMdy9ha4pcd9PZKTiR+uHl0nTrl5F2zoxiXnYeNYay2vYf5kfdmr3C7/BLy5tFaFaH6/8jY2v2Y2nM4LRd664scmV/it1kqfP3ZlrwuTMtsdtps11XRZ0XKCd3K6/rbMer6pGaPsv0d78gXtZKm31s/vN/lj6kLJOxSenx0zLVoW6jlLeco1OANZfNtdq6zrV3kLNnmxcsE2WajHtPAulynW5OLDCVtlnd676C5/Yc91aplosLKQX0M5W0CwXnPLNqssFtlA3mBNVgcGdshy05fBJsszBzvke6Ovcg422bV2YGWZP+USWy3qxolyspblQwbH8pwZUYx8G9OtnDTYWJ57rMtdsu4+HK28nEOwpmfubROyqtp1UeWu7MZ8eZOdV72GtLxFslMj5sXiGs6f7N5DRi7XECwU3c2ngssdPWNddvIS/FYUSwr+RbpMLTsZvNmP19/wiYKelfZ2G5mcMjmiICYECTZ31OtWrrx75xZz4tE+gsNDV0ZewbMgQga/OEKtjIx2MymjPWY6WsDzL0pO0B4z8zGRwLlFSsa6uf1qJKJCb/YkskgrcYAXcZPI6iCOf9Tmozj9kXwS6EicSJYbcYbTqpPI+ixq9N9MIxt3/0dt3gs8hz1Nm71crQbxScifw0sUPGBouPkYBJEoSLbDSz4usdsBXTxWf0AcPBrN/+dCZDJBM3L5ZztEZt9P5tnmx3OIzM8Uao93WIjMTgjNO4x/bwfIGTu+zXub/1YFyPxH33yr+O9zgHzk5aPHnCRAvrDNMXMSfh4WIPOPrZmH8XPPAJlzu7knP9/G5YRNNbXzbX6NgcsVK3drDHZdhcsrdjh36yp2LYnL7PfiupZk37G4zKZvr+tntqNtGRl7sFmuW86AzZOkn4P4R8xJ/g2uYEfzLU+C5oYmmAHeckPo2j1evufD0BxgvPzIAYJ5z2j5mfcEc73R8jPXC+a3Y+V+fhvL6cfK/Zw+to8RKw/2MaBMWqQ83LuBGh0pj/arkD26OHm8R4fsS0bJr/uSwJiOkl/3YoH95xiZ2n/233OPkck9d+86gwiZrjPwrq0Il221Fb71JBGypZ7Et4YmWLbX0HjWDYXKrrohv1qpQNldK+VVHxYmc/VhPjVxQTJbE+dTBxgie9QBetABslftI0/jsme9J1vjCsveNa5cXS8qA3W9M3ctMyhDtcwzZ/02JMP1266adUQOqFk3v3ay1On7y1qdAur0Z9azCb5y8NmENsjzGJ5yzHmMGX0GxUuOPYMyo87d8PIU5246e3TWiJOnOmvURrlt5s81iFPWU56v6n66d6bMKr/hTFkXj3N0pPy2c3S36M4OkvuS7zw7+FAoIOC85H/tL0hZbz5UDQAAAABJRU5ErkJggg=="
														/>
													}
												/>
											</div>
										</div>
									</div>
								)}

								{/* This component comes into modal only if the email address is valid and new */}
								{isValidMailNew && (
									<div className="row-card">
										<p>{this.state.email}</p>
										<div className="col-12">
											<input
												name="firstName"
												value={this.state.firstName}
												onChange={(e) => this.handleChange(e)}
												className="form-control mt-4"
												placeholder="First Name"
											/>

											<input
												name="lastName"
												value={this.state.lastName}
												onChange={(e) => this.handleChange(e)}
												className="form-control mt-4"
												placeholder="Last Name"
											/>

											<input
												name="password"
												value={this.state.password}
												onChange={(e) => this.handleChange(e)}
												className="form-control mt-4"
												placeholder="Password"
											/>
											{!isNewPasswordValid && (
												<p className="text-danger">
													Your Password must be in between 7 and 32 <br></br>
													characters and contains atleast 1 number and 1{" "}
													<br></br>
													letter
												</p>
											)}
										</div>
										<div className="col-6 offset-2 mt-5">
											<button
												onClick={() => this.checkSignUp()}
												style={{ borderRadius: "40px" }}
												class={
													firstName === "" || lastName === "" || password === ""
														? "btn btn-primary btn-block disabled ml-4 py-3"
														: "btn btn-primary btn-block ml-4 py-3"
												}
											>
												SignUp
											</button>
										</div>
									</div>
								)}
								{/* This component will show to the user only if email is valid and user is already there in database */}

								{isMailAlreadyPresnt && (
									<div className="row-card">
										<div className="col-12">
											<input
												name="email"
												value={this.state.email}
												onChange={(e) => this.handleChange(e)}
												className="form-control mt-4"
												placeholder="Email"
											/>

											<input
												name="password"
												value={this.state.password}
												onChange={(e) => this.handleChange(e)}
												className="form-control mt-4"
												placeholder="Password"
											/>
											{!isValidEmail && (
												<p className="text-danger">
													Please Enter a Valid Password
												</p>
											)}
										</div>
										<div className="col-6 offset-2 mt-5">
											<button
												onClick={() => this.checkLogin()}
												style={{ borderRadius: "40px" }}
												class={
													email === "" || password === ""
														? "btn btn-primary btn-block disabled ml-4 py-3"
														: "btn btn-primary btn-block ml-4 py-3"
												}
											>
												Login
											</button>
										</div>
									</div>
								)}
							</div>
							<div style={{ height: "200px" }} class="modal-footer">
								<p className="mr-5">
									Use of this Web site constitutes acceptance of the Vrbo{" "}
									<p className="text-primary">
										Terms and Conditions and Privacy Policy.
									</p>
								</p>
								<p>©2020 Vrbo. All rights reserved</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
const MapStateToProps = (state) => {
	return {
		message: state.login.message,
		isSent: state.login.isSent,
		registermessage: state.register.message,
		isUserLoggedIn:state.login.isUserLoggedIn,
		isUserRegistered:state.register.isUserRegistered
	};
};
const MapDisaptchToProps = (dispatch) => {
	return {
		sendLoginData: (payload) => dispatch(sendLoginData(payload)),
		sendRegisterData: (payload) => dispatch(sendRegisterData(payload)),
	};
};

export default connect(MapStateToProps, MapDisaptchToProps)(SignUPModal);


