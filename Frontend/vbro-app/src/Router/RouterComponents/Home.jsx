import React from "react";
import Carousel from "react-elastic-carousel";
import HomeCard from "../../Components/CommonComponents/Cards/HomeCard/HomeCard";
import HomeCard2 from "../../Components/CommonComponents/Cards/HomeCard/HomeCard2";
import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";
import { Link } from "react-router-dom";
import date from "date-and-time";
import moment from "moment";
import styles from "./home.module.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 4 },
];

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			adultsCount: 0,
			childrenCount: 0,
			location: "",
			pets: false,
			startDate: "",
			endDate: "",
		};
	}
	componentDidMount = () => {
		var darte = new Date().toLocaleDateString();
		let dating = moment(date.parse(darte, "DD/MM/YYYY"));
		console.log(dating);
		this.setState({
			startDate: dating,
			endDate: dating,
		});
	};
	handleSearchBtn = () => {
		var arrivalDate, destinationDate;
		let {
			childrenCount,
			adultsCount,
			startDate,
			endDate,
			pets,
			location,
		} = this.state;
		if (startDate._d && endDate._d) {
			arrivalDate = date.format(startDate._d, "MM/DD/YYYY");
			destinationDate = date.format(endDate._d, "MM/DD/YYYY");
			console.log(arrivalDate, destinationDate);
		} else {
			arrivalDate = "";
			destinationDate = "";
		}
		console.log("handlesearch");
		this.props.history.push(
			`/listing?location=${location}&arrivalDate=${arrivalDate}&destinationDate=${destinationDate}&pets=${pets}&adultsCount=${adultsCount}&childrenCount=${childrenCount}`
		);
	};
	handleChange = (e) => {
		console.log("ur in hande change");
		console.log(this.state.startDate, this.state.endDate);
		this.setState({
			pets: e.target.id,
		});
	};

	render() {
		let { adultsCount, childrenCount } = this.state;
		let guestCount = childrenCount + adultsCount;
		return (
			<div className="container-fluid">
				<div className={`${styles.img} col-12`}>
					<h2
						style={{ marginLeft: "120px", marginTop: "100px" }}
						className="font-weight-bold text-white float-left text-justify"
					>
						Beach House Condo? Cabin?<br></br>Find the perfect vacation rental
					</h2>
					<div
						style={{ marginLeft: "120px", borderRadius: '20px'}}
						className="col-10 card border shadow-md  border-rounded"
					>
						<div className="row p-3">
							<div className="col-3 text-center py-2 mt-3">
								<input
									style={{ height: "48px", borderRadius: '20px'}}
									className="form-control py-3"
									placeholder="Location"
									value={this.state.location}
									onChange={(e) => this.setState({ location: e.target.value })}
								/>
							</div>
							<div className="col-4 ml-3 mt-4">
								{/* Arrival */}
								<DateRangePicker
								   	isDayBlocked = {this.isDayBlocked}
									startDate={this.state.startDate}
									startDateId="your_unique_start_date_id"
									endDate={this.state.endDate}
									endDateId="your_unique_end_date_id"
									customArrowIcon={true}
									onDatesChange={({ startDate, endDate }) =>
										this.setState({ startDate, endDate })
									}
									focusedInput={this.state.focusedInput}
									onFocusChange={(focusedInput) =>
										this.setState({ focusedInput })
									}

									startDatePlaceholderText="Arrival"
									endDatePlaceholderText="Departure"
								/>
							</div>

							{/* <div className="col-2 card shadow-lg">Departure</div> */}
							<div className="col-2 py-3 ml-3">
								<button
									style={{ width: '170px', height: "50px", marginTop: '8px', textAlign: 'justify', borderRadius: '20px'}}
									type="button"
									class="btn btn-primary btn-block"
									data-toggle="modal"
									data-target="#exampleModal"
									className={`form-control`}
								>
									<span style={{padding: '5px'}}><i class="fa fa-users" aria-hidden="true"></i></span> Guest
									{guestCount !== 0 && (
										<small style={{ padding: "5px" }}>
											{childrenCount + adultsCount} Guests
										</small>
									)}
								</button>
								<div
									class="modal fade md-5 mt-5"
									id="exampleModal"
									tabindex="-10"
									role="dialog"
									aria-labelledby="exampleModalLabel"
									aria-hidden="true"
								>
									<div
										style={{ marginRight: "100px", marginTop: "80px" }}
										class="modal-dialog modal-dialog-centered"
										role="document"
									>
										<div class="modal-content">
											<div class="modal-header">
												<p
													style={{ marginLeft: "20%" }}
													className="text-muted mt-5 "
												>{`${adultsCount} adult`}</p>
												<div class="modal-footer md-5 mr-5">
													<button
														style={{ width: "60px", height: "60px" }}
														type="button"
														class="btn border border-primary rounded-circle"
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
													{this.state.num_adults}
													<button
														style={{ width: "60px", height: "60px" }}
														type="button"
														class="btn border border-primary rounded-circle"
														onClick={() =>
															this.setState({
																adultsCount: this.state.adultsCount + 1,
															})
														}
													>
														+
													</button>
												</div>
											</div>
											<div class="modal-header">
												<p
													style={{ marginLeft: "20%" }}
													className="text-muted mt-5"
												>{`${childrenCount} children`}</p>
												<div class="modal-footer mr-5">
													<button
														type="button"
														style={{ width: "60px", height: "60px" }}
														class="btn border border-primary rounded-circle"
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
													{this.state.num_child}
													<button
														style={{ width: "60px", height: "60px" }}
														type="button"
														class="btn border border-primary rounded-circle"
														onClick={() =>
															this.setState({
																childrenCount: this.state.childrenCount + 1,
															})
														}
													>
														+
													</button>
												</div>
											</div>
											<div class="modal-header">
												<p
													style={{ marginLeft: "20%" }}
													className="text-muted mt-1"
												>
													Pets
												</p>
												<div class="modal-footer mr-5">
													<div className="mr-5">
														<input
															style={{ width: "30px", height: "30px" }}
															type="radio"
															id="false"
															name="pets"
															onChange={(e) => this.handleChange(e)}
															value={this.state.isPetIncluded}
														></input>
														<label className="text-muted ml-1">No</label>
													</div>
													<div>
														<input
															style={{ width: "30px", height: "30px" }}
															type="radio"
															id="true"
															name="pets"
															onChange={(e) => this.handleChange(e)}
															value={this.state.isPetIncluded}
														></input>
														<label className="text-muted ml-1">Yes</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-2 mt-3">
								<button
									onClick={() => this.handleSearchBtn()}
									style={{ borderRadius: "20px", padding: '12px'}}
									class="btn btn-primary bg bg-primary text-white btn-block ml-4 mt-2"
								>
									Search
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h4 style={{ marginLeft: "6%" }} className="my-3 text-justify">
						Recommended destinations
					</h4>
					<p className="text-justify" style={{ marginLeft: "77px" }}>
						Based on your recent searches
					</p>
					<Carousel pagination={false} breakPoints={breakPoints}>
						{data.crousel1.map((item) => (
							<div key={uuidv4()} className="p-1">
								<HomeCard address={item.address} title={item.name} />
							</div>
						))}
					</Carousel>
				</div>

				<div>
					<h4
						style={{ marginLeft: "6%", background: "white-smoke" }}
						className="float-left mb-3 mt-5"
					>
						Find spaces that suit your style
					</h4>
					<Carousel
						pagination={false}
						focusOnSelect={true}
						breakPoints={breakPoints}
					>
						{data.crousel2.map((item) => (
							<div key={uuidv4()} className="p-1 text-justify">
								<HomeCard2
									text={item.text}
									address={item.address}
									title={item.name}
								/>
							</div>
						))}
					</Carousel>
				</div>

				<div
					className="d-flex justify-content-around bd-highlight mb-5"
					style={{ width: "1200px", marginLeft: "70px" }}
				>
					<div style={{ height: "150px", width: "270px" }}>
						<div
							style={{
								fontSize: "50px",
								textAlign: "justify",
								marginLeft: "10px",
							}}
						>
							<i class="fa fa-shield" aria-hidden="true"></i>
						</div>
						<h6 style={{ textAlign: "justify", marginLeft: "10px" }}>
							Peace of mind
						</h6>
						<p className="text-muted text-justify ml-2">
							Our Book with Confidence guarantee gives you 24/7 support
						</p>
					</div>
					<div style={{ height: "150px", width: "270px" }}>
						<div
							style={{
								fontSize: "50px",
								textAlign: "justify",
								marginLeft: "10px",
							}}
						>
							<i class="fa fa-coffee" aria-hidden="true"></i>
						</div>
						<h6 style={{ textAlign: "justify", marginLeft: "10px" }}>
							All the privacy of home
						</h6>
						<p className="text-muted text-justify ml-2">
							Enjoy full kitchens, laundry, pools, yards and more
						</p>
					</div>
					<div style={{ height: "150px", width: "270px" }}>
						<div
							style={{
								fontSize: "50px",
								textAlign: "justify",
								marginLeft: "10px",
							}}
						>
							<i class="fa fa-arrows" aria-hidden="true"></i>
						</div>
						<h6 style={{ textAlign: "justify", marginLeft: "10px" }}>
							More for less
						</h6>
						<p className="text-muted text-justify ml-2">
							More space, more privacy, more amenities — more value
						</p>
					</div>
					<div style={{ height: "150px", width: "270px" }}>
						<div
							style={{
								fontSize: "50px",
								textAlign: "justify",
								marginLeft: "10px",
							}}
						>
							<img src="https://img.icons8.com/color/48/000000/heart-rainbow.png" />
						</div>
						<h6 style={{ textAlign: "justify", marginLeft: "10px" }}>
							A place for everyone
						</h6>
						<p className="text-muted text-justify ml-2">
							We stand for diversity, inclusion and families everywhere
						</p>
					</div>
				</div>

				<div className="d-flex mb-5 justify-content-center">
					<div>
						TrustScore{" "}
						<span style={{ fontWeight: "bolder" }}>4.2 out of 5</span>
					</div>
					<div className="p-2" style={{ marginTop: "-10px" }}>
						<img
							src="https://images-static.trustpilot.com/api/stars/4/star.svg"
							height="30px"
							alt="img"
						/>
					</div>
					<div>
						Based on{" "}
						<span style={{ fontWeight: "bolder" }}>86,225 reviews </span>on
					</div>
					<div style={{ marginLeft: "5px" }}>
						<i class="fa fa-star" aria-hidden="true"></i>Trustpilot
					</div>
				</div>

				<div>
					<h4 style={{ marginLeft: "6%" }} className="float-left mb-3">
						Best places in the United States for going to the beach
					</h4>
					<Carousel pagination={false} breakPoints={breakPoints}>
						{data.crousel1.map((item) => (
							<div key={uuidv4()} className="p-1">
								<HomeCard address={item.address} title={item.name} />
							</div>
						))}
					</Carousel>
				</div>

				<div>
					<h4 style={{ marginLeft: "6%" }} className="float-left mb-3">
						Best places in the United States for nature
					</h4>
					<Carousel pagination={false} breakPoints={breakPoints}>
						{data.crousel1.map((item) => (
							<div key={uuidv4()} className="p-1">
								<HomeCard address={item.address} title={item.name} />
							</div>
						))}
					</Carousel>
				</div>

				<div className={styles.hme}>
					<div
						style={{
							color: "white",
							fontSize: "32px",
							width: "550px",
							marginLeft: "350px",
						}}
					>
						List your property on Vrbo and open your door to rental income
					</div>
					<Link to="/listyourproperty">
						<div>
							<button type="button" class="btn rounded-pill mt-5 p-3 btn-dark">
								List your property
							</button>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;
