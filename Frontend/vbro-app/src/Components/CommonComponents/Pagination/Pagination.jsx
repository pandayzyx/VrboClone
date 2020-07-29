import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { getListData } from "../../../Redux/Listing/action";
const queryString = require("query-string");

var windowurl = "";
class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curr_page: 1,
			total_page: 10,
			params: "",
			windowurl: "",
		};
	}

	componentDidMount() {
		let { search } = this.props;
		const values = queryString.parse(search);
		let params = values;
		if (Object.keys(params).length !== 0) {
			for (let key in params) {
				if (key === "pageNum") {
					console.log(params[key]);
					this.setState({
						curr_page: Number(params[key]) || 1,
					});
				}
			}
			this.setState({
				params: params,
			});
		}
	}

	handleClick = (id) => {
		let { getListData, history } = this.props;
		let { params } = this.state;
		console.log(params);
		console.log(Object.keys(params).length);
		var tabUrl = "";
		if (params !== "" && Object.keys(params).length !== 0) {
			for (let key in params) {
				if (key !== "pageNum") {
					console.log("ua re in params");
					tabUrl = tabUrl + key + "=" + params[key] + "&";
				}
			}
		} else {
			console.log("else");
			params = { pageNum: id };
			tabUrl = "";
		}

		history.push(`?${tabUrl}pageNum=${id}`);
		this.setState({
			curr_page: id,
			windowurl: tabUrl,
		});
		params["pageNum"] = id;
		const { handlePagination } = this.props;
		const url = "http://3.134.153.158:80/properties";
		getListData({
			url: url,
			params: params,
		});
		handlePagination(id);
	};

	render() {
		let { curr_page } = this.state;
		let { totalResults } = this.props;
		console.log(totalResults);
		var total_page = Math.ceil(totalResults / 20);
		var arr = [];
		for (let i = 1; i <= total_page; i++) {
			arr.push(i);
		}

		return (
			<div>
				<nav aria-label="...">
					<ul className="pagination">
						<li className="page-item">
							{/* <Link
								to={`?${windowurl}pageNum=${curr_page > 1 ? curr_page - 1 : 1}`}
							> */}
							<button
								className="page-link"
								onClick={() =>
									this.handleClick(curr_page > 1 ? curr_page - 1 : 1)
								}
							>
								Prev
							</button>
							{/* </Link> */}
						</li>
						{arr &&
							arr.map((item) => (
								<li
									key={uuidv4()}
									className={
										curr_page === item ? "page-item active" : "page-item"
									}
								>
									<button
										className="page-link"
										onClick={() => this.handleClick(item)}
									>
										{item}
									</button>
								</li>
							))}
						<li className="page-item">
							{/* <Link
								to={`?${windowurl}pageNum=${
									curr_page < total_page ? curr_page + 1 : total_page
								}`}
							> */}
							<button
								className="page-link"
								onClick={() =>
									this.handleClick(
										curr_page < total_page ? curr_page + 1 : total_page
									)
								}
							>
								Next
							</button>
							{/* </Link> */}
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		dataListingPage: state.list.dataListingPage,
		totalResults: state.list.totalResults,
	};
};
const MapDisaptchToProps = (dispatch) => {
	return {
		getListData: (payload) => dispatch(getListData(payload)),
	};
};
export default connect(MapStateToProps, MapDisaptchToProps)(Pagination);
