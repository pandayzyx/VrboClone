import React from "react";
import ListingCard from "../../Components/CommonComponents/Cards/ListingCards/ListingCard";
import { Link } from "react-router-dom";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { connect } from "react-redux";
import CheckBox from "../../Components/CommonComponents/CheckBox/CheckBox";
import { getListData } from "../../Redux/Listing/action";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import date from "date-and-time";
import Pagination from "../../Components/CommonComponents/Pagination/Pagination";
import SimpleMap from "../../Components/CommonComponents/ReactMap/ReactMap";
import Autocomplete from "react-google-autocomplete";
const queryString = require("query-string");

class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "Propery Reviews": {
        "1 Star": false,
        "2 Star": false,
        "3 Star": false,
        "4 Star": false,
      },
      "Property Features": {
        Pool: false,
        Parking: false,
        "Air Conditioning": false,
      },
      Neighbourhoods: {
        OceanLakes: false,
        "Myrtle Beach Resort": false,
        "Kingston Plantation": false,
        "Ocean Creek Resort": false,
      },
      "Property Type": {
        House: false,
        Apartment: false,
        Villa: false,
        Cottage: false,
      },
      "Property Location": {
        Oceanfront: false,
        Beachfront: false,
        Beach: false,
        "Beach view": false,
      },
      "Booking Options": {
        "Free Cancellation": false,
        "Instant Confirmation": false,
      },
      checkboxBoolean: true,
      filterArray: [
        { type: "rating", values: [] },
        { type: "category", values: [] },
        { type: "locationtype", values: [] },
        { type: "neighbourhoods", values: [] },
        { type: "bookOptions", values: [] },
        { type: "propFeatures", values: [] },
      ],
      filterCounter: 0,
      isFilterClicked: false,
      isClearFilterBtn: false,
      curr_page: 1,
      query: [],
      adultsCount: 0,
      childrenCount: 0,
      location: "",
      pets: "",
      startDate: "",
      endDate: "",
    };
  }

	componentDidMount() {
		console.log("this.state in mount", this.state);
		console.log("params in mount", this.props.history);
		let tempParams = this.props.history.location.search.substring(1).split("&");
		let params = {};
		tempParams.forEach((param) => {
			let temp = param.split("=");
			params[temp[0]] = temp[1];
		});
		console.log("params after", params);
		const { getListData } = this.props;
		const url = "https://3.134.153.158:8282/properties";

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
          location: params[key].split("%20").join(""),
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
	
	let tempParam = window.location.href.split('?')[1];

    getListData({
      url: url,
      params: params,
    });
  }

  handleChange = (e) => {
    let { filterArray } = this.state;
    let tempArr = filterArray;
	const parent = e.target.dataset.parent;
	const target = e.target.value;
    this.setState((prev) => {
		console.log(prev);
      return {
        [parent]: {
          ...prev[parent],
          [target]: !prev[parent][target],
        },
      };
    });
    console.log(this.state);
    // this.props.history.push(url);
    const values = queryString.parse(this.props.location.search);
    console.log(e.target.checked);
    if (e.target.checked) {
      tempArr.forEach((item) =>
        item.type === e.target.name ? item.values.push(e.target.id) : null
      );
      this.setState({
        [e.target.name]: e.target.value,
        filterCounter: this.state.filterCounter + 1,
        filterArray: tempArr,
      });
    } else {
      tempArr.forEach(
        (item) =>
          (item.values =
            item.type === e.target.name
              ? item.values.filter((item) => item !== e.target.id)
              : item.values.sort())
      );
      this.setState({
        [e.target.name]: e.target.value,
        filterCounter:
          this.state.countercounter <= 0 ? 0 : this.state.filterCounter - 1,
        filterArray: tempArr,
      });
    }
  };
  
	handleChangePet=(e)=>{
		this.setState({
			pets:e.target.id
		})
	}

  handlePagination = (item) => {
    // console.log(item);
    this.setState({
      curr_page: item,
    });
  };

  handleFilterBtn = () => {
    this.setState({
      isFilterClicked: true,
    });
  };

  handelCancelBtn = () => {
    this.setState({
      isFilterClicked: false,
      filterCounter: 0,
    });
  };

  handleSearchBtn = () => {
	  let {history, getListData} = this.props;
    let { filterCounter } = this.state;
    if (filterCounter !== 0) {
      this.setState({
        isClearFilterBtn: true,
        isFilterClicked: false,
      });
    } else if (filterCounter === 0) {
      this.setState({
        isFilterClicked: false,
      });
    }
	console.log(this.state.filterArray);
	let prevParams = window.location.href.split('?')[1];
	let paramsUrl = '?';
	if (prevParams !== undefined) {
		paramsUrl = `?${window.location.href.split('?')[1]}`;
	}
	this.state.filterArray.forEach(filter => {
		let tempholder = filter.values.join();
		if (tempholder.length !== 0) {
			paramsUrl += `&${filter.type}=${tempholder}`;
		}
	});
	history.push(paramsUrl);
	getListData({url: `https://3.134.153.158:8282/properties${paramsUrl}`});
  };

  hideClearFilterBtn = () => {
	// this.props.history.push('/listing');
	this.props.getListData({url: `https://3.134.153.158:8282/properties`});
    this.setState({
      isClearFilterBtn: false,
      filterCounter: 0,
    });
  };

	// This function is for the button  inside guest modal which send query params and makes an apirequest as well
	handleApplyBtn = () => {
		let {getListData} =  this.props
		var arrivalDate, destinationDate;
		let {
			childrenCount,
			adultsCount,
			startDate,
			endDate,
			pets,
			location,
		} = this.state;
		if (startDate._d &&endDate._d) {
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
		const values = queryString.parse(this.props.location.search);
		let params =  values
		const url = "https://3.134.153.158:8282/properties";
		getListData({
			url: url,
			params: params,
		});

		
	};
	handleLinkClicked =(e)=>{
		console.log("handle ckillkd")
		console.log(e.currentTarget.id)
		const values = queryString.parse(this.props.location.search);
		let params = values;
		var taburl  = ""
		for(let key in params){
			if(key!== "pageNum"&&key!=="location"){
				taburl  =  taburl + key +  "="+ params[key]+ "&"
			}
		}
		taburl =  taburl.split("")
		taburl =  taburl.filter((item,index)=>index<taburl.length-1).join("")
		taburl =  taburl + `&location=${this.state.location}`
		console.log(taburl)
		this.props.history.push(`/listing/${e.currentTarget.id}?${taburl}`)
        
	}

	render() {
		let search = this.props.location.search;
		let { dataListingPage } = this.props;
		let { history } = this.props;
		let { childrenCount, adultsCount, location } = this.state;
		let guestCount = childrenCount + adultsCount;
		let { isFilterClicked, isClearFilterBtn } = this.state;
		let filterData = data.filter;
		return (
			<>
				{/* This component is same as home component which can make the bookings */}
				<div className="row navbar navbar-expand-lg navbar-light p-1" style={{marginTop: '-30px'}}>
					<div className="col-3 text-center py-2 mt-3">
          <Autocomplete
								  className = "form-control ml-5 py-2"
								  value = {this.state.location}
								  onChange = {(e)=>this.setState({location:e.target.value})}
									style={{ width: "100%%",height:"47px"}}
									onPlaceSelected={(place) => {
										console.log(place);
										this.setState({location:place.formatted_address})
									}}
									types={["(regions)"]}
									componentRestrictions={{ country: "in" }}
								/>
					</div>
					<div className="col-4 ml-3 mt-3">
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

					{/* <div className="col-2 card shadow-lg">Departure</div> */}
					<div className="col-2 ml-3 mt-2">
					<button
									style={{
										width: "170px",
										height: "50px",
										marginTop: "8px",
										textAlign: "justify",
										borderRadius: "20px",
									}}
									type="button"
									class="btn btn-primary btn-block"
									data-toggle="modal"
									data-target="#exampleModal"
									className={`form-control`}
								>
									<span style={{ padding: "5px" }}>
										<i class="fa fa-users" aria-hidden="true"></i>
									</span>{" "}
									Guest
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
													onChange={(e) => this.handleChangePet(e)}
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
													onChange={(e) => this.handleChangePet(e)}
													value={this.state.isPetIncluded}
												></input>
												<label className="text-muted ml-1">Yes</label>
											</div>
											<br></br>
											<div>
												<button
													onClick={() => this.handleApplyBtn()}
													className="btn btn-primary rounded-pill mt-2"
												>
													Apply
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* The top component that takes booking ends here */}

				<nav class="navbar navbar-expand-lg navbar-light shadow-sm text-primary">
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
                {/* <Link
                  class="nav-link dropdown-toggle text-primary ml-4"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by Price
                </Link> */}
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
                {/* <Link
                  class="nav-link dropdown-toggle text-primary ml-4"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by Ratings
                </Link> */}
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

              <button
                onClick={() => this.handleFilterBtn()}
                className="btn border border-primary text-primary rounded-pill ml-3"
              >
                More Filter({this.state.filterCounter})
              </button>
              {isClearFilterBtn && (
                <button
                  onClick={() => this.hideClearFilterBtn()}
                  className="btn  text-primary rounded-pill ml-3"
                >
                  Clear Filter
                </button>
              )}
            </ul>
          </div>
        </nav>

        {/* Filter Component which is visible only when filter Component is clicked */}
        {isFilterClicked && (
          <div class="container-fluid card shadow-lg p-3">
            <div className="row">
              {filterData.map((mainitem, index) => (
                <div
                  ke
                  y={mainitem.title + index}
                  className="col-4 mt-3 text-center"
                >
                  <h4 className="text-center">{mainitem.title}</h4>
                  {mainitem.options.map((item, index) => {
                    let checkName =
                      mainitem.title === "Propery Reviews"
                        ? item + " " + "Star"
                        : item;
                    return (
                      <CheckBox
                        key={item + index}
                        label={checkName}
                        name={mainitem.type}
                        value={checkName}
                        parent={mainitem.title}
                        checked={this.state[mainitem.title][checkName]}
                        id={mainitem.queries[index]}
                        onchange={this.handleChange}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-6 offset-6">
                <div className="offset-2">
                  <button
                    onClick={() => this.handelCancelBtn()}
                    className="btn btn-primary px-5 rounded-pill offset-1"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => this.handleSearchBtn()}
                    className="btn btn-primary px-5 rounded-pill ml-2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Activate this code whn data is coming from the back end */}

				<div className="container-fluid">
					{dataListingPage.length === 0 && (
						<div class="spinner-border text-dark" role="status">
							<span class="sr-only">Loading...</span>
						</div>
					)}
					<div className="row">
						<div className="col-7">
							{!isFilterClicked &&
								dataListingPage &&
								dataListingPage.map((item,index) => (
									<>
										<ListingCard
										    onclick = {this.handleLinkClicked}
											key={uuidv4()}
											 id = {item.id}
											title={item.title}
											image = {item.imgsrc === "https://odis.homeaway.com/odis/destination/5941b1e0-2600-4b2a-b27e-c667abf7e510.carousel-m.jpg"
											?
											"https://odis.homeaway.com/odis/listing/170885a1-86a8-45c5-b42f-6cbe5d0b3fe1.f10.jpg":item.imgsrc
										
										}
											category={item.category}
											bedrooms={item.bedRooms}
											sleeps={item.sleeps}
											area={item.area}
											rating={item.rating}
											price={item.pricePerNight}
										/>
									</>
								))}
							
						</div>
						<div
							style={{
								position: "-webkit-sticky",
								position: "sticky",
								top: "10px",
							}}
							className="col-5 card shadow-md p-2"
						>
							<SimpleMap />
						</div>
					</div>
				</div>

        {/* For entity page for now keep this demo list card and work */}

        {/* <ListingCard /> */}

        {!isFilterClicked && dataListingPage && dataListingPage.length !== 0 && (
          <div className="m-5 d-flex justify-content-center">
            <Pagination
              history={history}
              search={search}
              handlePagination={this.handlePagination}
            />
          </div>
        )}
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
