import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import date from "date-and-time";
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
        console.log(params)
		const url = "http://aa77f6adcf8b.ngrok.io/properties";
		getBookingData({
			url: url,
			params: params,
		});
	}

	handleBookNow = () => {};

	render() {
		return <div>U are in Booking Page</div>;
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
