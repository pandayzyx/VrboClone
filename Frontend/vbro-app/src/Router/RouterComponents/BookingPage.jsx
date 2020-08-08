import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import date from "date-and-time";
import moment from "moment";
import { connect } from "react-redux";
import { getBookingData } from "../../Redux/Booking/action";
import { postBookingData } from "../../Redux/Booking/action";
import axios from "axios";
const queryString = require("query-string");
var boolean = true;
class BookingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			mobileNo: "",
			email: "",
			params: "",
			adultsCount: 0,
			childrenCount: 0,
			location: "",
			pets: "",
			startDate: "",
			endDate: "",
			isAllDetailsFilled :true,
			isBookingStepOneDone: false,
		};
	}
	componentDidMount() {
		let { getBookingData } = this.props;
		console.log(this.props.match.params);

		const values = queryString.parse(this.props.location.search);
		values.id = this.props.match.params.id;
		this.setState({
			params: values,
		});
		let params = values;
		for (let key in params) {
			if (key === "adultsCount") {
				console.log(key, typeof adultsCount);
				this.setState({
					adultsCount: Number(params[key]),
				});
			} else if (key === "childrenCount") {
				this.setState({
					childrenCount: Number(params[key]),
				});
			} else if (key === "pets") {
				this.setState({
					pets: params[key],
				});
			} else if (key === "location") {
				this.setState({
					location: params[key],
				});
			} else if (key === "arrivalDate" && params[key] !== "") {
				let dating = moment(date.parse(params[key], "MM/DD/YYYY"));
				console.log(dating);

				this.setState({
					startDate: dating,
				});
			} else if (key === "destinationDate" && params[key] !== "") {
				let dating = moment(date.parse(params[key], "MM/DD/YYYY"));
				console.log(dating);

				this.setState({
					endDate: dating,
				});
			}
		}
		console.log(params);
		const url = "http://localhost:8000/properties";
		getBookingData({
			url: url,
			params: params,
		});
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	

	handleBooking = async () => {
		let {totalSum} = this.props
		let {firstName,lastName,email,mobileNo} =this.state
		var redirectToPaymentPage = (totalSum)=>{
			const values = queryString.parse(this.props.location.search);
			let params =  values
		   this.props.history.push(`/payment?arrivalDate=${params.arrivalDate}&totalSum=${totalSum}&destinationDate=${params.destinationDate}&adultsCount=${params.adultsCount}&childrenCount=${params.childrenCount}&firstName=${firstName}&location=${params.location}&lastName=${lastName}&email=${email}&mobileNo=${mobileNo}`)
				   
			}
		let { data } = this.props;
		let order_res = await axios.post(
			"http://localhost:8000/razorPay/pay",
			{
				amount: totalSum*100,
				currency: "INR",
				receipt: 32 + "#" + "Gaurav",
				payment_capture: "1",
			}
		);
		const options = {
			key: "rzp_test_TIeeqbck6yEzcU", // Enter the Key ID generated from the Dashboard
			amount: totalSum*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: "INR",
			name: "Book Trip",
			description: "Transaction",
			image: "/logo.svg",
			order_id: order_res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			handler: async function (response) {
				// alert(response.razorpay_payment_id);
				// alert(response.razorpay_order_id);
				// alert(response.razorpay_signature)
				console.log(response);
				let final_res = await axios.post(
					"http://localhost:8000/razorPay/verify",
					{
						...response,
					}
				);
				if (final_res.data.isRazorPaySuccess === true) {
					 redirectToPaymentPage(totalSum)
					//  alert(final_res.data.message);
					console.log(final_res.data)
					// this.props.history.push('/')
				} else {
					alert(final_res.data.message);
				}
			},
			prefill: {
				name: "Gaurav",
				email: "gauravx.gp@gmail.com",
				contact: "9707214633",
			},
			// "notes": {
			//     "address": ""
			// },
			theme: {
				color: "#F37254",
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	handleAgreeAndContinueBtn = () => {
		let {firstName,lastName,email,mobileNo,isAllDetailsFilled} = this.state
		let flag  =  isAllDetailsFilled
		console.log(firstName,lastName,email,mobileNo)
	
		if(firstName === ""||lastName === ""||mobileNo === ""||email ===""){
				flag =  false
				console.log("if")
			this.setState({
				isAllDetailsFilled:false
			})
		}
		else{
			 flag = true
			this.setState({
				isAllDetailsFilled:true
			})
		}
		console.log(flag)
		
		if(flag){
			this.setState({
				isBookingStepOneDone: true,
			});	
		}
		
	};
	handleBackBtn = () => {};

	render() {
		let {totalSum} = this.props
		let { isBookingStepOneDone ,isAllDetailsFilled} = this.state;
		var Guests = 4;
		var Title =
			"A Ritz Sea Inn- Perfect Location! Across from the Beach! - Seaside, FL Rental";
		var area = "Santa Rosa Beach, FL, US";
		var Rating = 4;
		var HouseRules = [
			"Children allowed",
			"No pets",
			"No parties/events",
			"No smoking",
			`Max guests: ${Guests}`,
			"Minimum age of primary renter: 25",
		];
		var amountPerNight = 335.0;
		var numberOfNights = 3;
		var amount = amountPerNight * numberOfNights;
		var ownerFees = 668.5;
		var serviceFees = 159.0;
		var lodingFees = 200.83;
		var Total = amount + ownerFees + serviceFees + lodingFees;

		return (
			<div>
				<div className="container">
					<div className="row">
						{/* Component that contains input form which need to be send for booking */}
						{!isBookingStepOneDone && (
							<div className="col-6">
								<div
									style={{
										fontWeight: "bolder",
										fontSize: "32px",
										textAlign: "justify",
										height: "70px",
										borderBottom: "1px dashed grey",
										marginTop: "25px",
									}}
								>
									Begin your booking
								</div>
								<div
									style={{
										fontWeight: "bolder",
										textAlign: "justify",
										marginTop: "15px",
									}}
								>
									Book with confidence. Guaranteed.
								</div>
								<div className="text-justify">
									You’re covered when you book and pay on Vrbo.
								</div>
								<div className="text-justify mt-3">
									<span style={{ fontWeight: "bolder" }}>
										<i class="fa fa-clock-o pr-2" aria-hidden="true"></i>Act
										Fast!
									</span>{" "}
									Price and availability may change.
								</div>
								<hr
									style={{ borderBottom: "1px dashed grey", marginTop: "30px" }}
								/>
								<div style={{ textAlign: "justify", fontWeight: "bolder" }}>
									Enter contact information
								</div>
								<form>
									<div class="row mt-4">
										<div class="col">
											<input
												type="text"
												name="firstName"
												value={this.state.firstName}
												onChange={(e) => this.handleChange(e)}
												style={{ height: "50px" }}
												class="form-control"
												placeholder="First name"
											/>
										</div>
										<div class="col">
											<input
												type="text"
												name="lastName"
												value={this.state.lastName}
												onChange={(e) => this.handleChange(e)}
												style={{ height: "50px" }}
												class="form-control"
												placeholder="Last name"
											/>
										</div>
									</div>
									<div class="row mt-2">
										<div class="col-6">
											<input
												type="text"
												name="email"
												value={this.state.email}
												onChange={(e) => this.handleChange(e)}
												style={{ height: "50px" }}
												class="form-control"
												placeholder="Email"
											/>
										</div>
										
										<div class="col-6">
											<input
												type = "text"
												name ="mobileNo"
												value={this.state.mobileNo}
												onChange ={(e) => this.handleChange(e)}
												style={{ height: "50px" }}
												class="form-control"
												placeholder="Phone"
											/>
										</div>
										{!isAllDetailsFilled &&<p className = "text-danger ml-4">Please Fill All The Details to Continue Booking</p>}
									</div>
									<div className="container">
										<div className="row mt-2">
											<textarea
												class="form-control"
												style={{ height: "80px" }}
												aria-label="With textarea"
												placeholder="Your message...(Optional)"
											></textarea>
											<small className="mt-2">
												<span style={{ fontWeight: "bolder" }}>Tip:</span>{" "}
												Managers are more likely to approve your request when
												you include a message.
											</small>
											<span style={{ fontSize: "20px" }}>
												<i
													class="fa fa-lightbulb-o ml-3 p-2"
													aria-hidden="true"
												></i>
											</span>
										</div>
									</div>
								</form>
								<div
									style={{
										textAlign: "justify",
										marginTop: "25px",
										fontSize: "13px",
									}}
								>
									By clicking 'Agree & continue' you are agreeing to our{" "}
									<a href="">Terms and Conditions</a>,{" "}
									<a href="">Privacy Policy</a>, and to receive booking-related
									texts. Standard messaging rates may apply.
								</div>
								<div class="d-flex justify-content-end">
									<button
										type="button"
										onClick={() => this.handleAgreeAndContinueBtn()}
										class="btn btn-lg btn-primary rounded-pill my-3"
									>
										Agree & continue
									</button>
								</div>
							</div>
						)}

						{/* Component that will contain book now button for final Booking */}
						{isBookingStepOneDone && (
							<div className="col-6">
								<div
									style={{
										fontWeight: "bolder",
										fontSize: "32px",
										textAlign: "justify",
										height: "70px",
										borderBottom: "1px dashed grey",
										marginTop: "25px",
									}}
								>
									Review rules & policies
								</div>
								<div
									style={{
										fontWeight: "bolder",
										textAlign: "justify",
										marginTop: "15px",
									}}
								>
									House Rules
								</div>
								<div style={{ textAlign: "justify", marginTop: "15px" }}>
									Check in after: 16:00
								</div>
								<div style={{ textAlign: "justify" }}>
									Check out before: 10:00
								</div>
								<ul style={{ textAlign: "justify", marginTop: "20px" }}>
									{HouseRules.map((item) => (
										<li style={{ padding: "7px" }}>{item}</li>
									))}
								</ul>
								<hr
									style={{ borderBottom: "1px dashed grey", marginTop: "30px" }}
								/>
								<div
									style={{
										fontWeight: "bolder",
										textAlign: "justify",
										marginTop: "15px",
									}}
								>
									Policies
								</div>
								<div
									style={{
										fontWeight: "bolder",
										textAlign: "justify",
										marginTop: "20px",
									}}
								>
									<i class="fa fa-file-text mr-3" aria-hidden="true"></i>
									Manager's Cancellation Policy:
								</div>
								<div style={{ textAlign: "justify", marginTop: "20px" }}>
									<i class="fa fa-home mr-3" aria-hidden="true"></i>
									<span style={{ fontWeight: "bolder" }}>Damage Policy: </span>
									You will be responsible for any damage to the rental property
									caused by you or your party during your stay.
								</div>
								<div className="card my-4">
									<div class="p-3 custom-control custom-checkbox">
										<input
											type="checkbox"
											class="custom-control-input"
											id="customCheck1"
										/>
										<label class="custom-control-label" for="customCheck1">
											I have read and agree to comply with all rental policies
											and terms.
										</label>
									</div>
								</div>
								<div class="d-flex justify-content-end">
									<button
										type="button"
										onClick={() => this.handleBooking()}
										class="btn btn-lg btn-primary rounded-pill my-3"
									>
										Book Now
									</button>
								</div>
							</div>
						)}

						{/* Right Side component containing information about Pricing */}
						<div className="col-6 border">
							<div className="card mt-4 p-2">
								<div className="d-flex">
									<div
										style={{
											marginTop: "20px",
											marginLeft: "10px",
											marginRight: "50px",
											fontSize: "30px",
										}}
									>
										<i class="fa fa-phone" aria-hidden="true"></i>
									</div>
									<div style={{ textAlign: "justify" }}>
										<div className="p-1">
											For booking assistance, call{" "}
											<span style={{ fontWeight: "bolder" }}>
												(1) 888-382-8909
											</span>
										</div>
										<div className="p-1">
											Rental Number:{" "}
											<span style={{ fontWeight: "bolder" }}>292218</span>
										</div>
										<div className="p-1">
											Customer Number:{" "}
											<span style={{ fontWeight: "bolder" }}>749700</span>
										</div>
									</div>
								</div>
							</div>
							<div className="d-flex mt-2 ml-5">
								<div className="p-1">
									<img
										className="img-fluid"
										src="https://odis.homeaway.com/odis/listing/f71ba4c0-3e0e-472c-b3ca-5b0a74c9ec1b.c10.jpg"
										alt="img"
									/>
								</div>
								<div className="p-1">
									<img
										className="img-fluid"
										src="https://odis.homeaway.com/odis/listing/6a8c565e-b974-4499-9912-b409e7b3cecb.c10.jpg"
										alt="img"
									/>
								</div>
								<div className="p-1">
									<img
										className="img-fluid"
										src="https://odis.homeaway.com/odis/listing/ee113445-1757-4b1c-88da-4bc8a1ee124c.c10.jpg"
										alt="img"
									/>
								</div>
							</div>
							<div
								style={{
									fontWeight: "bolder",
									marginLeft: "17px",
									textAlign: "justify",
									marginTop: "20px",
								}}
								className="text-truncate"
							>
								{Title}
							</div>
							<div className="p-3 text-muted text-justify">{area}</div>
							<div className="d-flex">
								<div
									style={{
										fontWeight: "bolder",
										marginLeft: "15px",
										marginTop: "3px",
									}}
								>
									Rating
								</div>
								<div>
									<i class="fa fa-star p-2" aria-hidden="true"></i>
									{Rating}
								</div>
							</div>

							<div
								className={`p-2`}
								style={{
									marginTop: "20px",
									marginLeft: "100px",
									textAlign: "justify",
								}}
							>
								<div>
									{/* Arrival */}
									<DateRangePicker
										startDate={this.state.startDate}
										startDateId="your_unique_start_date_id"
										endDate={this.state.endDate}
										endDateId="your_unique_end_date_id"
										onDatesChange={({ startDate, endDate }) =>
											this.setState({ startDate, endDate })
										}
										focusedInput={this.state.focusedInput}
										onFocusChange={(focusedInput2) =>
											this.setState({ focusedInput2 })
										}
										startDatePlaceholderText="Arrival"
										readOnly={true}
										endDatePlaceholderText="Departure"
									></DateRangePicker>
								</div>

								<div className="border" style={{ width: "285px" }}>
									<div className="text-muted">Guests</div>
									<div>
										{this.state.adultsCount + this.state.childrenCount} guests
									</div>
								</div>
							</div>

							<div className="container mt-5">
								<div className="d-flex justify-content-between p-2">
									<div>
										${amountPerNight} x {numberOfNights} nights
									</div>
									<div>$ {amount}</div>
								</div>
								<div className="d-flex justify-content-between p-2">
									<div>Owner Fees</div>
									<div>${ownerFees}</div>
								</div>
								<div className="d-flex justify-content-between p-2">
									<div>Service Fees</div>
									<div>${serviceFees}</div>
								</div>
								<div className="d-flex justify-content-between p-2">
									<div>Loding Tax</div>
									<div>${lodingFees}</div>
								</div>
							</div>
							<hr />
							<div className="container" style={{ fontWeight: "bolder" }}>
								<div className="d-flex justify-content-between p-2">
									<div>Total</div>
									<div>${totalSum}</div>
								</div>
							</div>
							<hr />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const MapStateToProps = (state) => {
	return {
		dataBookingPage: state.book.dataBookingPage,
		totalSum: state.entity.totalSum
	};
};

const MapDisaptchToProps = (dispatch) => {
	return {
		getBookingData: (payload) => dispatch(getBookingData(payload)),
		postBookingData: (payload) => dispatch(postBookingData(payload)),
	};
};
export default connect(MapStateToProps, MapDisaptchToProps)(BookingPage);
