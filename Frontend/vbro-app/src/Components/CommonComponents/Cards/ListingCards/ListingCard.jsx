import React, { Component } from "react";
import { Link } from "react-router-dom";

function ListingCard(props) {
	let { title, category, bedrooms, sleeps, area, rating, price } = props;
	return (
		<div class="card mb-3 shadow-lg" style={{ maxWidth: "860px" }}>
			<div class="row no-gutters">
				<div class="col-md-3">
					<img
						style={{ height: "172%" }}
						className="img-fluid"
						src="https://odis.homeaway.com/odis/listing/5f87bbed-3c0a-41f9-920e-17c3f4545dbf.f10.jpg"
						class="card-img"
						alt="..."
					/>
				</div>
				<div class="col-md-9 pt-3">
					<div class="card-body">
						<Link style={{ textDecoration: "none", color: "black" }}>
							<h5 className="card-text float-left ml-5 mt-1">{title}</h5>

							<br></br>

							<div
								style={{ float: "clear-both" }}
								className="row col-12 float-left ml-3"
							>
								<div className="col-3 text-left">{category}</div>
								<div className="col-2">{`${bedrooms}BR`}</div>
								<div className="col-2">{`Sleep${sleeps}`}</div>
								<div className="col-5">{`${area}Sq-ft`}</div>
							</div>
						</Link>
					</div>
				</div>
				<br></br>
				<div className = "overflow-hidden col-9 offset-3 px-3 card-footer">
					<div className="float-right">
						<div>Premium Partner</div>
						<p>{`Rating ${rating}`}</p>
					</div>

					<div className="float-left">
						<div>Price</div>
						<p className="mt-0">{`Rs ${price} pernight`}</p>
					</div>
				</div>
			</div>
		</div>



	);
}

export default ListingCard;
