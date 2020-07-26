import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { getListData } from "../../../Redux/Listing/action";

class Pagination extends Component {
	constructor(props) {
		super(props);

		this.state = {
			curr_page: 1,
			total_page: 10,
		};
	}
	componentDidMount() {
		getListData();
	}

	handleClick = (id) => {
        let{getListData} = this.props
        const { handlePagination } = this.props;
        console.log("handlepagination")
		let url = `http://10183f54e926.ngrok.io/properties?&pageNum=${id}`;
		getListData(url);
	
		this.setState({
			curr_page: id,
		});
		handlePagination(id);
	};

	render() {
     
        let { curr_page, total_page } = this.state;
        console.log(curr_page)
		var arr = [];
		for (let i = 1; i <= total_page; i++) {
			arr.push(i);
		}

		return (
			<div>
				<nav aria-label="...">
					<ul className="pagination">
						<li className="page-item">
                            <Link to = {`?pageNum=${curr_page > 1 ? curr_page - 1 : 1}`}>

                           
							<button
								className="page-link"
								onClick={() =>
									this.handleClick(curr_page > 1 ? curr_page - 1 : 1)
								}
							>
								Prev
							</button>
                            </Link>
						</li>
						{arr &&
							arr.map((item) => (
								<li
									key={uuidv4()}
									className={
										curr_page === item ? "page-item active" : "page-item"
									}
								>
									<Link
										to={`?&pageNum=${item}`}
									>
										<button
											className="page-link"
											onClick={() => this.handleClick(item)}
										>
											{item}
										</button>
									</Link>
								</li>
							))}
						<li className="page-item">
                            <Link
                             to = {`?pageNum=${curr_page < total_page ? curr_page + 1 : total_page}`}
                            >
                            
                           
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
                            </Link>
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
	};
};
const MapDisaptchToProps = (dispatch) => {
	return {
		getListData: (payload) => dispatch(getListData(payload)),
	};
};
export default connect(MapStateToProps, MapDisaptchToProps)(Pagination);
