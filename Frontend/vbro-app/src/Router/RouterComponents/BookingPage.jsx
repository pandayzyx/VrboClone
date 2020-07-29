import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import date from "date-and-time";
import moment from "moment";
import { connect } from "react-redux";
import { getBookingData } from "../../Redux/Booking/action";
import { postBookingData } from "../../Redux/Booking/action";
const queryString = require("query-string");

class BookingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			params: "",
			adultsCount: 0,
			childrenCount: 0,
			location: "",
			pets: "",
			startDate: "",
            endDate: "",
            isBookingStepOneDone:false
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
		const url = "http://aa77f6adcf8b.ngrok.io/properties";
		getBookingData({
			url: url,
			params: params,
		});
	}

    handleBookNow = () => {

    };

    handleAgreeAndContinueBtn  =()=>{

      this.setState({
          isBookingStepOneDone:true
      })
    }

	render() {
        let {isBookingStepOneDone} = this.state
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
                        {!isBookingStepOneDone &&
						<div className ="col-6">
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
									<i class="fa fa-clock-o pr-2" aria-hidden="true"></i>Act Fast!
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
											style={{ height: "50px" }}
											class="form-control"
											placeholder="First name"
										/>
									</div>
									<div class="col">
										<input
											type="text"
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
											style={{ height: "50px" }}
											class="form-control"
											placeholder="Email"
										/>
									</div>
									<div class="col-2">
										<input
											type="text"
											style={{ height: "50px" }}
											class="form-control"
											placeholder="+91"
										/>
									</div>
									<div class="col-4">
										<input
											type="text"
											style={{ height: "50px" }}
											class="form-control"
											placeholder="Phone"
										/>
									</div>
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
											Managers are more likely to approve your request when you
											include a message.
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
                                    onClick = {()=>this.handleAgreeAndContinueBtn()}
									class="btn btn-lg btn-primary rounded-pill my-3"
								>
									Agree & continue
								</button>
							</div>
						</div>
                         }
					
                       {isBookingStepOneDone &&
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
								<i class="fa fa-file-text mr-3" aria-hidden="true"></i>Manager's
								Cancellation Policy:
							</div>
							<div style={{ textAlign: "justify", marginTop: "20px" }}>
								<i class="fa fa-home mr-3" aria-hidden="true"></i>
								<span style={{ fontWeight: "bolder" }}>Damage Policy: </span>You
								will be responsible for any damage to the rental property caused
								by you or your party during your stay.
							</div>
							<div className="card my-4">
								<div class="p-3 custom-control custom-checkbox">
									<input
										type="checkbox"
										class="custom-control-input"
										id="customCheck1"
									/>
									<label class="custom-control-label" for="customCheck1">
										I have read and agree to comply with all rental policies and
										terms.
									</label>
								</div>
							</div>
							<div class="d-flex justify-content-end">
								<button
									type="button"
									class="btn btn-lg btn-primary rounded-pill my-3"
								>
									Book Now
								</button>
							</div>
						</div>
    }

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
									<img className ="img-fluid" src="https://odis.homeaway.com/odis/listing/f71ba4c0-3e0e-472c-b3ca-5b0a74c9ec1b.c10.jpg" alt="img" />
								</div>
								<div className="p-1">
									<img className ="img-fluid" src="https://odis.homeaway.com/odis/listing/6a8c565e-b974-4499-9912-b409e7b3cecb.c10.jpg" alt="img" />
								</div>
								<div className="p-1">
									<img className = "img-fluid" src="https://odis.homeaway.com/odis/listing/ee113445-1757-4b1c-88da-4bc8a1ee124c.c10.jpg" alt="img" />
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
										onFocusChange={(focusedInput) =>
											this.setState({ focusedInput })
										}
										startDatePlaceholderText="Arrival"
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
									<div>${Total}</div>
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
	};
};

const MapDisaptchToProps = (dispatch) => {
	return {
		getBookingData: (payload) => dispatch(getBookingData(payload)),
		postBookingData: (payload) => dispatch(postBookingData(payload)),
	};
};
export default connect(MapStateToProps, MapDisaptchToProps)(BookingPage);
