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
	 constructor(props){
		 super(props)
		 this.state ={

		 }
	 }
	render() {
		console.log(data.crousel1);
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
						className="col-10 card border shadow-md border-rounded"
					>
						<div className="row p-3">
							<div className="col-3 card shadow-lg">Locations</div>
							<div className="col-4 card shadow-lg ml-3">
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
							<div className="col-2 card shadow-lg ml-3">Guest</div>
							<div className="col-2">
								<Link to="/listing">
									<button
										style={{ borderRadius: "40px" }}
										class="btn btn-primary bg bg-primary text-white btn-block ml-4 py-2"
									>
										Search
									</button>
								</Link>
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
