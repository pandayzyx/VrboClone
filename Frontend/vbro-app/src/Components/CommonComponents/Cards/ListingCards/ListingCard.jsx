import React, { Component } from "react";
import { Link } from "react-router-dom";

function ListingCard(props) {
	let { title, category, bedrooms, sleeps, area, rating, price,id,onclick } = props;
	return (
		
		<div onClick = {(e)=>onclick(e)} id = {id} class="card mb-3 shadow-md border-rounded" style = {{maxHeight:"400px"}}>
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
							<h5 className="card-text float-left ml-4 mt-4">{title}</h5>
							<div
								style={{ float: "clear-both" }}
								className="row col-12 float-left ml-2 d-flex"
							>
								<div className="text-left"><img className='p-2' src="https://img.icons8.com/dotty/30/000000/interior.png"/>{category}</div>
								<div className="ml-3"><i class="fa fa-bed p-2 mt-1" aria-hidden="true"></i>{`${bedrooms}BR`}</div>
								<div className="ml-3 mt-2"><img src="https://img.icons8.com/nolan/24/sleeping-baby.png"/>{`Sleep${sleeps}`}</div>
								<div><img className='p-2' src="https://img.icons8.com/nolan/24/country.png"/>{`${area}Sq-ft`}</div>
							</div>
						</div>
						
						<div style = {{marginTop:"132px"}}className="overflow-hidden card-footer">
							<div className="float-right mt-1">
								<div>Premium Partner</div>
								<div><i class="fa fa-star p-2" aria-hidden="true"></i>{`Rating ${rating}`}</div>
							</div>

							<div className="float-left">
								<div><i class="fa fa-money p-2" aria-hidden="true"></i>Price</div>
								<div className="mt-0">{`$ ${price} pernight`}</div>
							</div>
						</div>
					</div>
					<br></br>
				</div>
			</div>
		
	);
}

export default ListingCard;
