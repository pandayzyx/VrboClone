import React, { Component } from "react";
import { Link } from "react-router-dom";

function ListingCard(props) {
	let { title, category, bedrooms, sleeps, area, rating, price } = props;
	return (
		<Link
			to="/listing/entity"
			style={{ textDecoration: "none", color: "black" }}
		>
			<div class="card mb-3 shadow-md border-rounded" style = {{maxHeight:"400px"}}>
				<div  class="row no-gutters">
					<div class="col-md-6 overflow-hidden">
						<img
							style={{ height: "100%" }}
							
							src="https://odis.homeaway.com/odis/listing/e4559c88-6cd7-4306-88dd-29c4f64909ae.f10.jpg"
							class="card-img"
							alt="..."
						/>
					</div>
					<div class="col-md-6">
						<div class="card-body">
							<h5 className="card-text float-left ml-5 mt-4">{title}</h5>
							<div
								style={{ float: "clear-both" }}
								className="row col-12 float-left ml-3 d-flex"
							>
								<div className="text-left">{category}</div>
								<div className="ml-3">{`${bedrooms}BR`}</div>
								<div className="ml-3">{`Sleep${sleeps}`}</div>
								<div className="ml-3">{`${area}Sq-ft`}</div>
							</div>
						</div>
						
						<div style = {{marginTop:"132px"}}className="overflow-hidden card-footer">
							<div className="float-right mt-1">
								<div>Premium Partner</div>
								<div>{`Rating ${rating}`}</div>
							</div>

							<div className="float-left">
								<div>Price</div>
								<div className="mt-0">{`$ ${price} pernight`}</div>
							</div>
						</div>
					</div>
					<br></br>
				</div>
			</div>
		</Link>
	);
}

export default ListingCard;
