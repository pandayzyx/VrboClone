import React from "react";
import ListingCard from "../../Components/CommonComponents/Cards/ListingCards/ListingCard";
import { Link } from "react-router-dom";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import CheckBox from "../../Components/CommonComponents/CheckBox/CheckBox";
import { getListData } from "../../Redux/Listing/action";

let fiterArray = [
	"Booking Options",
	"Property Reviews",
	"Property Type",
	"Location",
	"Features",
	"NeighbourHood",
];

class ListingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checkboxBoolean: "",
			urlArray: [],
			isFilterClicked: false,
		};
	}
	// shouldComponentUpdate(){
	//     if(this.props.match.url){
	//         console.log("Component ur chnaged")
	//         console.log(this.props.match)
	//     }
	// }
	componentDidMount() {
		let { getListData } = this.props;
		getListData();
	}
	handleFilter = ()=>{
      this.setState({
		  isFilterClicked:true
	  })
	}

	handleChange = (e) => {
		console.log(e.id)
		this.setState({
			[e.target.name]:e.target.value
		})
	};
	

	render() {
		let { dataListingPage } = this.props;
		let {isFilterClicked} = this.state
		let filterData = data.filter;
		console.log(dataListingPage)
		return (
			<>
				<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg text-primary mt-3 ">
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

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<Link class="nav-link text-primary" href="#">
									Trip Boards<span class="sr-only">(current)</span>
								</Link>
							</li>
							<li class="nav-item dropdown">
								<Link
									class="nav-link dropdown-toggle text-primary ml-4"
									to=""
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Sort by Price
								</Link>
								<div
									class="dropdown-menu mt-2 "
									aria-labelledby="navbarDropdownMenuLink"
								>
									{/* <Link class="dropdown-item" text-primary href="#">Traveller Login</Link> */}
									<Link
										class="dropdown-item text-primary"
										to="/listing?price=asc"
									>
										INC
									</Link>
									<div class="dropdown-divider"></div>
									<Link
										class="dropdown-item text-primary"
										to="/listing?price=desc"
									>
										Desc
									</Link>
								</div>
							</li>
							{/* This component is shown when user is loggen in */}
							<li class="nav-item dropdown">
								<Link
									class="nav-link dropdown-toggle text-primary ml-4"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Sort by Ratings
								</Link>
								<div
									class="dropdown-menu mt-2 "
									aria-labelledby="navbarDropdownMenuLink"
								>
									{/* <Link class="dropdown-item" text-primary href="#">Traveller Login</Link> */}

									<div class="dropdown-divider"></div>
									<Link
										class="dropdown-item text-primary"
										to="/listing?ratings=asc"
									>
										INC
									</Link>
									<div class="dropdown-divider"></div>

									<Link
										class="dropdown-item text-primary"
										to="/listing?ratings=desc"
									>
										DESC
									</Link>
								</div>
							</li>
							{/* This signup button is shown when user is not logged in */}

							<button onClick = {()=>this.handleFilter()} className="btn border border-primary text-primary rounded-pill ml-3">
								More Filter
							</button>
						</ul>
					</div>
				</nav>
                 
				 {/* Filter Component which is visible only when filter Component is clicked */}
				 {
					 isFilterClicked && 
				 
				<div class="container-fluid card shadow-lg p-3">
					<div className="row">
						{filterData.map((item) => (
							<div className="col-4 mt-3 text-center">
								<h4 className="text-center">{item.title}</h4>
								{item.options.map((item) => (
									<CheckBox
										label={item}
										name="checkboxBoolean"
										value={this.state.checkboxBoolean}
										id={item}
										onchange={this.handleChange}
									/>
								))}
							</div>
						))}
					</div>
					<div className = "row">
						<div className= "col-6 offset-6">
							<div className = "offset-2">
						<button onClick = {()=>isFilterClicked()} className="btn btn-primary px-5 rounded-pill offset-1">Cancel</button>
						<button onClick = {()=>isFilterClicked()} className="btn btn-primary px-5 rounded-pill ml-2">Search</button>
							</div>
						
						</div>
						
					</div>
				</div>
	}

				{!isFilterClicked && dataListingPage &&
					dataListingPage.map((item) => (
						<ListingCard
							key={uuidv4()}
							title={item.title}
							category={item.category}
							bedrooms={item.bedRooms}
							sleeps={item.sleeps}
							area={item.area}
							rating={item.rating}
							price={item.pricePerNight}
						/>
					))}
			</>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		dataListingPage: state.list.dataListingPage,
	};
};
const MapDisaptchToProps = (dispatch) => {
	return {
		getListData: (payload) => dispatch(getListData(payload)),
	};
};
export default connect(MapStateToProps, MapDisaptchToProps)(ListingPage);
