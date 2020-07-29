import React from "react";
import styles from "./entity.module.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
import moment from "moment";
import { getEntityData } from "../../Redux/Entity/action";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import date from "date-and-time";
import axios from  "axios"
const queryString = require("query-string");

class EntityPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			adult: 0,
			child: 0,
			adultsCount: 0,
			childrenCount: 0,
			location: "",
			pets: "",
			startDate: "",
            endDate: "",
            bookingStartDate:"",
			bookingEndDate:"",
			isGuestCountZero:"",
			isBookingDateAvailable:""
           

            
		};
	}
	componentDidMount() {
		let { getEntityData } = this.props;
		let id = this.props.match.params.id
		let tempParams = this.props.history.location.search.substring(1).split("&");
		let params = {};
		tempParams.forEach((param) => {
			let temp = param.split("=");
			params[temp[0]] = temp[1];
		});
		console.log("params after", params);

		// These line of codes are written to reatin the booking details from the home page
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
                    bookingStartDate:dating
                   
				});
			} else if (key === "destinationDate" && params[key] !== "") {
				let dating = moment(date.parse(params[key], "MM/DD/YYYY"));
				console.log(dating);

				this.setState({
                    endDate: dating,
                    bookingEndDate:dating
                   
				});
			}
		}

		const url = `http://3.134.153.158/properties/${id}`;
		getEntityData({
			url: url,
			params: params,
		});
	}
  
	handleSearchBtn = ()=>{
	    var arrivalDate,destinationDate;
	    let {startDate,endDate} = this.state
	    if (startDate._d && endDate._d) {
			arrivalDate = date.format(startDate._d, 'MM/DD/YYYY')
			destinationDate = date.format(endDate._d, 'MM/DD/YYYY')
			console.log(arrivalDate, destinationDate);
		} else {
			arrivalDate = startDate;
			destinationDate = endDate;
	    }
	    const values = queryString.parse(this.props.location.search);
		let params = values;
        var taburl  = ""
        params["location"] = this.state.location
		for(let key in params){
			if(key!== "arrivalDate"&& key!== "destinationDate"){
				taburl  =  taburl + key +  "="+ params[key]+ "&"
			}
		}
		taburl =  taburl.split("")
	    taburl =  taburl.filter((item,index)=>index<taburl.length-1).join("")
	    taburl  =  taburl + `&arrivalDate=${arrivalDate}&destinationDate=${destinationDate}`
		this.props.history.push(`/listing?${taburl}`)
	   console.log(this.props.location.search)
	}

	handleBooking = () => {
		let {adultsCount,childrenCount} = this.state
		const values = queryString.parse(this.props.location.search);
		var arrivalDate,destinationDate; 
			let {bookingStartDate,bookingEndDate} = this.state
			if (bookingStartDate._d && bookingEndDate._d) {
				arrivalDate = date.format(bookingStartDate._d, 'MM/DD/YYYY')
				destinationDate = date.format(bookingEndDate._d, 'MM/DD/YYYY')
				console.log(arrivalDate, destinationDate);
			} else {
				arrivalDate = bookingStartDate;
				destinationDate = bookingEndDate;
			}

		let params = values;
		const url  = ""
		axios.get(url,
			{params:params}
			)

		if(adultsCount+childrenCount > 0 ){
			
			
			var taburl  = ""
			params["location"] = this.state.location
			for(let key in params){
				if(key!== "arrivalDate"&& key!== "destinationDate"){
					taburl  =  taburl + key +  "="+ params[key]+ "&"
				}
			}
			let id = this.props.match.params.id
			taburl =  taburl.split("")
			taburl =  taburl.filter((item,index)=>index<taburl.length-1).join("")
			taburl  =  taburl + `&arrivalDate=${arrivalDate}&destinationDate=${destinationDate}`
			this.props.history.push(`/listing/${id}/checkout?${taburl}`)
		}

		else{
			this.setState({
				isGuestCountZero:true
			})
		}
		
		
		
			   
	   };

	render() {
		let { getEntityData } = this.props;
		let { location, adultsCount } = this.state;

		var avRating = 4;
		var perNightPrice = "$ " + 52 + ".00 ";
		// var guests = {this.state.adult + this.state.child}
		var bedroom = 1;
		var bathroom = 1;
		var nights = 1;
		var total = 406 + ".00";
		var cancellationUntil = "Dec 10, 2020";
		var PropertyTitle = "Comfortable rooms Stay near Miramar Beach";
		var PropertyReviews = [1, 2, 3, 4, 5];
		var PropertyType = [
			"Villa",
			"Apartment or condo",
			"House",
			"Studio",
			"Cabin",
			"Cottage",
			"Bungalow",
			"Bed & breakfast",
			"Guest house",
			"Castle",
			"Chateau/country house",
			"Estate",
			"Boat",
			"Yacht",
			"Lodge",
			"Farmhouse",
			"Barn",
			"RV",
			"Tower",
			"Chalet",
			"Townhouse",
			"Resort",
			"Hotel",
			"Houseboat",
			"Mill",
		];
		var PropertyFeatures = [
			"Air conditioning",
			"Pool",
			"Private pool",
			"Internet or Wifi",
			"Washer",
			"Dryer",
			"Stove",
			"Oven",
			"Parking available",
			"TV",
			"Hot tub",
			"Bed linens provided",
			"Outdoor grill",
			"Dishwasher",
			"Fireplace",
			"Microwave",
			"Iron and board",
			"Crib",
			"Kids high chair",
		];
		var PropertyLocation = [
			"Oceanfront",
			"Beachfront",
			"Beach",
			"Ocean",
			"Downtown",
			"Beach view",
			"Lake",
			"Mountains",
			"Rural",
			"Ski-in/ski-out",
			"Village",
		];
		var NearbyActivities = [
			"Spa and wellness",
			"Theme parks",
			"Zoo or wildlife viewing",
			"Museums",
			"Golfing",
			"Fishing",
			"Skiing or snowboarding",
			"Hiking",
			"Shopping",
			"Cycling",
			"Horseback riding",
			"Watersports",
			"Scuba diving or snorkeling",
			"Rock or mountain climbing",
			"Casinos",
		];
		var BookingOptions = ["Instant Confirmation", "24 Hour Confirmation"];
		var PropertyDescription =
			"The location of this property is definitely the best feature which compels one to book the place. The comforts are just like a home, for unbelievably reasonable tariffs. The rooms are simple and classy, with comfortable beds and ample space for luggage. They are well lit up by natural light.All homely comforts are provided like free Wi-Fi, TV, AC, geyser and parking facility, they also accept card payment at the time of checkout.";
		var General = [
			"Telephone",
			"Air Conditioning",
			"Heating",
			"Linens Provided",
			"Washing Machine",
			"Clothes Dryer",
			"Parking",
			"Internet",
			"Towels Provided",
			"FitnessRoom/ Equipment",
			"Iron & Board",
			"Hair Dryer",
			"Elevator",
			"Living Room",
		];
		var Kitchen = [
			"Dishwasher",
			"Oven",
			"Toaster",
			"Refrigirator",
			"Microwave",
			"Dishes & Utensils",
			"Stove",
			"Coffee Maker",
			"Kitchen",
		];
		var Entertainment = [
			"Television",
			"DVD Player",
			"Video Library",
			"Satellite/Cabel",
		];
		var Outside = ["Balcony", "Deck/Patio", "Golf", "Bicycles", "Tennis"];
		var HouseRules = [
			"Children allowed",
			"No Smoking",
			"No pets",
			"Max gueste: 4",
			"No parties/events",
			"Minimum age of primary renter: 25",
		];
		var reviews = [
			{
				reviewby: "Spring break 2020",
				ratings: "5",
				review: "We loved it!",
				publishedat: "Published Mar 15, 2020",
			},
			{
				reviewby: "Valet Parking Nightmare",
				ratings: "3",
				review:
					"The property is great. The location is close to all that Seaside has to offer. The problem we had was that the valet parking consumed all the traffic flow which backed up in front of this unit. We would have like to of been able to go away from Seaside in the evenings but we literally could not get our car out due to the traffic situation. Also, the cabana man was booked up over a month in advance. I purchased nice chairs and an umbrella to use and it was impossible because there was only 20 ft of area available for public use. I had to go down there at 6 a.m. to put my stuff out to get a place on the front row.",
				publishedat: "Published Jul 22, 2019",
			},
		];

		return (
			<>
				<div className="row navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3">
					<div className="col-3 text-center py-2 mt-3">
						<input
							style={{ height: "48px" }}
							className="form-control py-2 ml-4 mt-0"
							placeholder="Location"
							value={location}
							onChange={(e) => this.setState({ location: e.target.value })}
						/>
					</div>
					<div className="col-4 ml-3 mt-4">
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
							onFocusChange={(focusedInput) => this.setState({ focusedInput })}
							startDatePlaceholderText="Check In"
							endDatePlaceholderText="Check Out"
							startDateAriaLabel = "Check In"
						></DateRangePicker>
							
					</div>
					<div className="col-2 mt-3">
						<button
							onClick={() => this.handleSearchBtn()}
							style={{ borderRadius: "40px" }}
							class="btn btn-primary bg bg-light border border-primary text-primary btn-block p-3 py-1"
						>
							Search
						</button>
					</div>

					{/* <div className="col-2 card shadow-lg">Departure</div> */}
				</div>

				<br></br>
				<div>
					<div className={styles.grid1}>
						<div>
							<div
								id="carouselExampleInterval"
								class="carousel slide"
								style={{ width: "550px", marginLeft: "200px" }}
								data-ride="carousel"
							>
								<div class="carousel-inner">
									<div class="carousel-item active" data-interval="5000">
										<img
											src="https://odis.homeaway.com/odis/listing/9b6c8562-3a45-411b-9052-c956dfccca3d.f10.jpg"
											class="d-block w-100"
											alt="..."
										/>
									</div>
									<div class="carousel-item" data-interval="2000">
										<img
											src="https://odis.homeaway.com/odis/listing/ef5a6b91-6c7a-4012-a4be-e56390bb59a4.f10.jpg"
											class="d-block w-100"
											alt="..."
										/>
									</div>
									<div class="carousel-item">
										<img
											src="https://odis.homeaway.com/odis/listing/b7ed0e08-29a2-498c-a700-ec446ad75e27.f10.jpg"
											class="d-block w-100"
											alt="..."
										/>
									</div>
								</div>
								<a
									class="carousel-control-prev"
									href="#carouselExampleInterval"
									role="button"
									data-slide="prev"
								>
									<span
										class="carousel-control-prev-icon"
										aria-hidden="true"
									></span>
									<span class="sr-only">Previous</span>
								</a>
								<a
									class="carousel-control-next"
									href="#carouselExampleInterval"
									role="button"
									data-slide="next"
								>
									<span
										class="carousel-control-next-icon"
										aria-hidden="true"
									></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
							<div className="container">
								<div class="card text-center">
									<div class="card-header">
										<ul class="nav nav-tabs card-header-tabs">
											<li class="nav-item">
												<a class="nav-link active" href="#overview">
													Overview
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#amenities">
													Amenities
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#policies">
													Policies
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#reviews">
													Reviews
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#map">
													Map
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#owner">
													Owner
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#ratesandavailability">
													Rates & Availability
												</a>
											</li>
										</ul>
									</div>
									<div class="card-body">
										<h5 id="overview" class="card-title text-justify">
											{PropertyTitle}
										</h5>
										{/* <p class="card-text"></p> */}
										<div style={{ textAlign: "justify" }}>
											<div>
												<span style={{ marginRight: "10px" }}>
													<i class="fa fa-home" aria-hidden="true"></i>
												</span>
												{PropertyType[2]}
											</div>
											<div>
												<span style={{ marginRight: "10px" }}>
													<i class="fa fa-users" aria-hidden="true"></i>
												</span>
												sleeps: {this.state.adult + this.state.child}
											</div>
											<div>
												<span style={{ marginRight: "10px" }}>
													<i class="fa fa-bed" aria-hidden="true"></i>
												</span>
												Bedrooms: {bedroom}
											</div>
											<div>
												<span style={{ marginRight: "10px" }}>
													<i class="fa fa-bath" aria-hidden="true"></i>
												</span>
												Bathrooms: {bathroom}
											</div>
											<div>
												<span style={{ marginRight: "10px" }}>
													<i class="fa fa-moon" aria-hidden="true"></i>
												</span>
												Min Stay: {nights} night
											</div>
										</div>
										<hr />
										<div style={{ display: "flex", flexWrap: "wrap" }}>
											{/* <div style={{flex: 'left', marginRight: '30px', backgroundColor: 'rgb(222, 222, 222)'}}>Instant Confirmation</div>
                                        <div style={{backgroundColor: 'rgb(222, 222, 222)'}}>No Smoking</div> */}
											{PropertyFeatures.map((item) => (
												<div
													style={{
														backgroundColor: "rgb(222, 222, 222)",
														margin: "5px",
														padding: "10px",
													}}
												>
													{item}
												</div>
											))}
										</div>
										<hr />
										<div
											style={{
												textAlign: "justify",
												marginTop: "30px",
												color: "gray",
											}}
										>
											{PropertyDescription}
										</div>
										<h5 class="font-bolder text-justify mt-5">Bedrooms</h5>
										<div style={{ display: "flex", marginTop: "30px" }}>
											<div
												style={{
													flex: "left",
													marginRight: "30px",
													backgroundColor: "rgb(222, 222, 222)",
													padding: "10px",
												}}
											>
												<span style={{ marginRight: "10px" }}>
													<i class="fa fa-bed" aria-hidden="true"></i>
												</span>
												Bedrooms: {bedroom}
											</div>
											<div
												style={{
													backgroundColor: "rgb(222, 222, 222)",
													padding: "10px",
												}}
											>
												<span style={{ marginRight: "10px" }}>
													<i class="fa fa-users" aria-hidden="true"></i>
												</span>
												sleeps: {this.state.adult + this.state.child}
											</div>
										</div>
										<h5 id="amenities" class="font-bolder text-justify mt-5">
											Amenities
										</h5>
										<hr />
										<h6 class="font-bolder text-justify my-3">Featured</h6>
										{/* <div style={{backgroundColor: 'rgb(222, 222, 222)', width: '130px'}}><span style={{marginRight: '10px'}}><i class="fa fa-fire" aria-hidden="true"></i></span>No Smoking</div> */}
										<div style={{ display: "flex", flexWrap: "wrap" }}>
											{PropertyFeatures.map((item) => (
												<div
													style={{
														backgroundColor: "rgb(222, 222, 222)",
														margin: "5px",
														padding: "10px",
													}}
												>
													{item}
												</div>
											))}
										</div>
										<hr />
										<h6 class="text-justify my-3">Bathrooms</h6>
										<div
											style={{
												width: "150px",
												backgroundColor: "rgb(222, 222, 222",
												padding: "10px",
											}}
										>
											<span style={{ marginRight: "10px" }}>
												<i class="fa fa-bath" aria-hidden="true"></i>
											</span>
											Bathrooms: {bathroom}
										</div>
										<hr />
										<h6 class="text-justify my-3">Location Type</h6>
										<div
											style={{
												width: "150px",
												backgroundColor: "rgb(222, 222, 222",
												padding: "10px",
											}}
										>
											<span style={{ marginRight: "10px" }}>
												<i class="fa fa-bath" aria-hidden="true"></i>
											</span>
											{PropertyType[2]}
										</div>
										<hr />
										<h6 class="text-justify my-3">General</h6>
										<div style={{ display: "flex", flexWrap: "wrap" }}>
											{General.map((item) => (
												<div
													style={{
														backgroundColor: "rgb(222, 222, 222)",
														margin: "5px",
														padding: "10px",
													}}
												>
													{item}
												</div>
											))}
										</div>
										<hr />
										<h6 class="text-justify my-3">Kitchen</h6>
										<div style={{ display: "flex", flexWrap: "wrap" }}>
											{Kitchen.map((item) => (
												<div
													style={{
														backgroundColor: "rgb(222, 222, 222)",
														margin: "5px",
														padding: "10px",
													}}
												>
													{item}
												</div>
											))}
										</div>
										<hr />
										<h6 class="text-justify my-3">Entertainment</h6>
										<div style={{ display: "flex", flexWrap: "wrap" }}>
											{Entertainment.map((item) => (
												<div
													style={{
														backgroundColor: "rgb(222, 222, 222)",
														margin: "5px",
														padding: "10px",
													}}
												>
													{item}
												</div>
											))}
										</div>
										<hr />
										<h6 class="text-justify my-3">Outside</h6>
										<div style={{ display: "flex", flexWrap: "wrap" }}>
											{Outside.map((item) => (
												<div
													style={{
														backgroundColor: "rgb(222, 222, 222)",
														margin: "5px",
														padding: "10px",
													}}
												>
													{item}
												</div>
											))}
										</div>
										<hr />

										<h5 id="policies" class="font-bolder text-justify mt-5">
											Policies
										</h5>
										<h6 class="font-bolder text-justify mt-4 mb-2">
											Cancellation Policy
										</h6>
										<hr />
										<div
											style={{ fontWeight: "bolder" }}
											className="text-justify p-1"
										>
											100% refund{" "}
											<span style={{ fontWeight: "normal" }}>
												if you cancel by {cancellationUntil}
											</span>
										</div>
										<div
											style={{ fontWeight: "bolder" }}
											className="text-justify p-1"
										>
											50% refund{" "}
											<span style={{ fontWeight: "normal" }}>
												(minus the service charges) if you cancel at{" "}
												{cancellationUntil}
											</span>
										</div>
										<div
											style={{ fontWeight: "bolder" }}
											className="text-justify p-1"
										>
											No refund{" "}
											<span style={{ fontWeight: "normal" }}>
												if you cancel after {cancellationUntil}
											</span>
										</div>
										<div className="text-justify p-1">
											Learn more about our
											<span>
												<a href="https://help.vrbo.com/articles/What-is-the-cancellation-policy?_ga=2.211335123.711292096.1595481273-1855678380.1595313332">
													{" "}
													cancellation policies
												</a>
											</span>
										</div>
										<h6 class="text-justify mt-4 mb-2">
											Damage and Incidentals
										</h6>
										<hr />
										<div className="text-justify p-1">
											You will be responsible for any damage to the rental
											property caused by you or your party during your stay.
										</div>
										<h6 class="text-justify mt-4 mb-2">House Rules</h6>
										<div style={{ display: "flex", marginTop: "20px" }}>
											<div style={{ flex: "left", marginRight: "30px" }}>
												<i class="fa fa-sign-in" aria-hidden="true"></i>
												<span> Check in after: </span>4: 00 PM
											</div>
											<div>
												<i class="fa fa-sign-out" aria-hidden="true"></i>
												<span> Check out before: </span>10: 00 AM
											</div>
										</div>
										<hr />
										<div style={{ width: "150px" }}>
											{/* <ul>
                                            <li>Max guest: 2</li>
                                        </ul> */}
											<ul style={{ width: "300px", textAlign: "justify" }}>
												{HouseRules.map((item) => (
													<li>{item}</li>
												))}
											</ul>
										</div>
										<div>
											<h5 id="reviews" className="text-justify mt-5">
												{reviews.length} Reviews
											</h5>
											<div style={{ textAlign: "justify" }}>
												Rating {avRating}/5
											</div>
											<hr />
											<div>
												{reviews.length != 0 &&
													reviews.map((item) => (
														<div style={{ textAlign: "justify" }}>
															<h5>{item.reviewby}</h5>
															<div>{item.ratings}/5</div>
															<p className="my-3">{item.review}</p>
															<small className="text-muted">
																{item.publishedat}
															</small>
															<hr />
														</div>
													))}
											</div>
										</div>
										{reviews.length == 0 && (
											<div className="text-justify">
												This property doesn't have any reviews yet.
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
						<div style={{ width: "350px", height: "500px" }}>
							<div className={styles.grid1}>
								<div style={{ fontSize: "32px" }}>
									{perNightPrice}{" "}
									<span style={{ fontSize: "10px" }} className="text-muted">
										per night
									</span>
								</div>
								<div>
									<div>
										<button type="button" class="btn btn-outline-dark m-1">
											<span className="m-2" style={{ color: "red" }}>
												<i class="fa fa-heart-o" aria-hidden="true"></i>
											</span>
											Save
										</button>
									</div>
									<div>
										<button type="button" class="btn btn-outline-dark m-1">
											<span className="m-1">
												<i class="fa fa-share-square-o" aria-hidden="true"></i>
											</span>
											Share
										</button>
									</div>
								</div>
							</div>
							<div style={{ marginLeft: "20px", width: "200px" }}>
								<span
									style={{
										color: "green",
										borderRadius: "40px",
										border: "2px solid green",
										marginRight: "5px",
									}}
								>
									<i class="fa fa-check" aria-hidden="true"></i>
								</span>
								Your dates are available
							</div>
							<div
								className={`p-2 ${styles.grid2}`}
								style={{ marginTop: "20px", textAlign: "justify" }}
							>
								<div>
									{/* Arrival */}
                                    <DateRangePicker
							startDate ={this.state.bookingStartDate}
							startDateId="your_unique_start_date_id"
							endDate = {this.state.bookingEndDate}
							endDateId="your_unique_end_date_id"
							onDatesChange={({ startDate,endDate }) =>
								this.setState({ bookingStartDate:startDate, bookingEndDate:endDate})
							}
							focusedInput={this.state.focusedInput2}
							onFocusChange={(focusedInput2) => this.setState({ focusedInput2})}
							startDatePlaceholderText="Check In"
							endDatePlaceholderText="Check Out"
							startDateAriaLabel = "Check In"
						></DateRangePicker>
									
								</div>

								<div className="border" style={{ width: "285px" }}>
									<div className="text-muted">Guests</div>
									<div>
										{this.state.adultsCount + this.state.childrenCount} guests
									</div>
									<br></br>
						{this.state.isGuestCountZero && <p className = "text-danger">Please Add Guest To Continue Booking</p>}
								</div>
								<div style={{ width: "285px" }}>
									{/* <!-- Button trigger modal --> */}
									<button
										type="button"
										class="btn btn-block rounded-pill btn-primary"
										data-toggle="modal"
										data-target="#exampleModalCenter"
									>
										Guests
									</button>

									{/* <!-- Modal --> */}
									<div
										class="modal fade mr-4"
										id="exampleModalCenter"
										tabindex="-1"
										role="dialog"
										aria-labelledby="exampleModalCenterTitle"
										aria-hidden="true"
									>
										<div
											class="modal-dialog modal-dialog-centered"
											role="document"
										>
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title" id="exampleModalLongTitle">
														Number of guests
													</h5>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div>
														<div>
															<div className="input-group p-3 offset-2">
																<div className="text-muted mt-2">
																	{this.state.adultsCount} Adult
																</div>
																<button
																	style={{ width: "60px", height: "60px" }}
																	type="button"
																	class="btn border border-primary rounded-circle ml-3"
																	onClick={() =>
																		this.setState({
																			adultsCount:
																				this.state.adultsCount >= 1
																					? this.state.adultsCount - 1
																					: this.state.adultsCount,
																		})
																	}
																>
																	-
																</button>
																<button
																	style={{ width: "60px", height: "60px" }}
																	type="button"
																	class="btn border border-primary rounded-circle ml-3"
																	onClick={() =>
																		this.setState({
																			adultsCount: this.state.adultsCount + 1,
																		})
																	}
																>
																	+
																</button>
																{/* <button onClick={()=>this.removeAdult()} className='rounded-circle' style={{fontSize: '28px', marginLeft: '10px'}}><i class="fa fa-minus-circle" aria-hidden="true"></i></button> */}

																{/* <button onClick={()=>this.addAdult()} className='rounded-circle' style={{fontSize: '28px', marginLeft: '10px'}}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> */}
															</div>
														</div>
														<div>
															<div className="input-group p-3 offset-2">
																<div className="text-muted mt-2">
																	{this.state.childrenCount} Child
																</div>
																{/* <button onClick={()=>this.removeChild()} className='rounded-circle' style={{fontSize: '28px', marginLeft: '10px'}}><i class="fa fa-minus-circle" aria-hidden="true"></i></button> */}
																{/* <button onClick={()=>this.addChild()} className='rounded-circle' style={{fontSize: '28px', marginLeft: '10px'}}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> */}
																<button
																	type="button"
																	style={{ width: "60px", height: "60px" }}
																	class="btn border border-primary rounded-circle ml-3 "
																	onClick={() =>
																		this.setState({
																			childrenCount:
																				this.state.childrenCount >= 1
																					? this.state.childrenCount - 1
																					: this.state.childrenCount,
																		})
																	}
																>
																	-
																</button>
																<button
																	style={{ width: "60px", height: "60px" }}
																	type="button"
																	class="btn border border-primary rounded-circle ml-3"
																	onClick={() =>
																		this.setState({
																			childrenCount:
																				this.state.childrenCount + 1,
																		})
																	}
																>
																	+
																</button>
															</div>
														</div>
													</div>
												</div>
												<div class="modal-footer">
													<button
														type="button"
														class="btn btn-primary"
														data-dismiss="modal"
													>
														Save Changes
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.grid1} style={{ marginTop: "20px" }}>
								<div style={{ textAlign: "justify", marginLeft: "20px" }}>
									<div style={{ fontWeight: "bolder" }}>Total</div>
									<div className="text-muted">Includes taxes and fees</div>
								</div>
								<div style={{ textAlign: "right", marginRight: "20px" }}>
									<div style={{ fontWeight: "bolder" }}>$ {total}</div>
									<div style={{ color: "blue" }}>View Details</div>
								</div>
							</div>
							<div>
								<button onClick= {()=>this.handleBooking()}
									type="button"
									class="btn btn-primary rounded-pill btn-lg mt-4"
								>
									Book Now
								</button>
							</div>
							<div style={{ marginTop: "20px" }}>
								<span>
									<i class="fa fa-repeat" aria-hidden="true"></i>
								</span>
								<span style={{ fontWeight: "bolder", marginLeft: "5px" }}>
									Free Cancellation
								</span>
								<span style={{ fontSize: "10px", marginLeft: "5px" }}>
									until {cancellationUntil}
								</span>
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
		dataEntityPage: state.entity.dataEntityPage,
	};
};
const MapDisaptchToProps = (dispatch) => {
	return {
		getEntityData: (payload) => dispatch(getEntityData(payload)),
	};
};
export default connect(MapStateToProps, MapDisaptchToProps)(EntityPage);
