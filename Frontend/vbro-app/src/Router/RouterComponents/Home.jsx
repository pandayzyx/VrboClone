import React from "react";
import Carousel from "react-elastic-carousel";
import HomeCard from "../../Components/CommonComponents/Cards/HomeCard/HomeCard";
import HomeCard2 from "../../Components/CommonComponents/Cards/HomeCard/HomeCard2";
import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";
import { Link } from "react-router-dom";
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
			isPetIncluded: false,
			startDate:"",
			endDate:""
		};
	}
	handleSearchBtn = () => {
		console.log("handlesearch");
		this.props.history.push("/listing?date=date&guest=2&location=paris");
	};
	handleChange = (e) => {
		console.log("ur in hande change")
		console.log(this.state.startDate)
		this.setState({
			isPetIncluded:e.target.id
		})
	};

	render() {
		let { adultsCount, childrenCount} = this.state;
		let guestCount = childrenCount+adultsCount
		return (
			<div className="container-fluid border border-primary">
				<div className={`${styles.img} col-12 border border-primary`}>
					<h2
						style={{ marginLeft: "120px", marginTop: "100px" }}
						className="font-weight-bold text-white float-left"
					>
						Beach House Condo?Cabin?<br></br>Find the perfect vaccation rental
					</h2>
					<div
						style={{ marginLeft: "120px" }}
						className="col-10 card border shadow-md  border-rounded"
					>
						<div className="row p-3">
							<div className="col-3 text-center py-2 mt-3">
								<input
									style={{ height: "48px" }}
									className="form-control py-3"
									placeholder="Location"
									value={this.state.location}
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
									onFocusChange={(focusedInput) =>
										this.setState({ focusedInput })
									}
									startDatePlaceholderText="Arrival"
									endDatePlaceholderText="Departure"
								></DateRangePicker>
							</div>

							{/* <div className="col-2 card shadow-lg">Departure</div> */}
							<div className="col-2 py-3 ml-3">
								<button
								   style = {{height:"60px"}}
									type="button"
									class="btn btn-primary btn-block"
									data-toggle="modal"
									data-target="#exampleModal"
									className={`form-control`}
								>
								<i class="fa fa-user" aria-hidden="true"></i> Guest
								{
									guestCount!==0&&	<div>{childrenCount+adultsCount} Guests</div>
								}
							
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
												<p className="text-muted mt-4">{`${adultsCount} adult`}</p>
												<div class="modal-footer md-5 mr-5">
													<button
														style = {{width:"60px",height:"60px"}}
														type="button"
														class="btn border border-primary rounded-circle"
														onClick={()=>this.setState({adultsCount:this.state.adultsCount>=1?this.state.adultsCount-1:this.state.adultsCount})}
													>
														-
													</button>
													{this.state.num_adults}
													<button
														style = {{width:"60px",height:"60px"}}
														type="button"
														class="btn border border-primary rounded-circle"
														onClick={()=>this.setState({adultsCount:this.state.adultsCount+1})}
													>
														+
													</button>
												</div>
											</div>
											<div class="modal-header">
												<p className="text-muted mt-4">{`${childrenCount} children`}</p>
												<div class="modal-footer mr-5">
													<button
														type="button"
														style = {{width:"60px",height:"60px"}}
														class="btn border border-primary rounded-circle"
														onClick={()=>this.setState({childrenCount:this.state.childrenCount>=1?this.state.childrenCount-1:this.state.childrenCount})}
													>
														-
													</button>
													{this.state.num_child}
													<button
														style = {{width:"60px",height:"60px"}}
														type="button"
														class="btn border border-primary rounded-circle"
														onClick={()=>this.setState({childrenCount:this.state.childrenCount+1})}
													>
														+
													</button>
												</div>
											</div>
											<div class="modal-header">
												<p className="text-muted mt-4">Pets</p>
												<div class="modal-footer mr-5">
													<div className = "mr-5">
														<input 	style = {{width:"30px",height:"30px"}}
															type="radio"
															id = "false"
															name = "pets"
															
														
															onChange={(e) => this.handleChange(e)}
															value={this.state.isPetIncluded}
														></input>
														<label className="text-muted ml-1">No</label>
													</div>
													<div>
														<input
														style = {{width:"30px",height:"30px"}}
															type="radio"
															id = "true"
							                                name = "pets"
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
									style={{ borderRadius: "40px" }}
									class="btn btn-primary bg bg-primary text-white btn-block p-3 ml-4 py-2"
								>
									Search
								</button>
							</div>
						</div>
					</div>
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
							<div key={uuidv4()} className="p-1">
								<HomeCard2
									text={item.text}
									address={item.address}
									title={item.name}
								/>
							</div>
						))}
					</Carousel>
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
			</div>
		);
	}
}

export default Home;
