import React from "react";
import { Link } from "react-router-dom";

function ListingCard() {
	return (
		<div class="card mb-3 " style={{ maxWidth: "800px" }}>
			<div class="row no-gutters">
				<div class="col-md-4">
					<img
						style={{ height: "100%" }}
						className="img-fluid"
						src="https://odis.homeaway.com/odis/listing/5f87bbed-3c0a-41f9-920e-17c3f4545dbf.f10.jpg"
						class="card-img"
						alt="..."
					/>
				</div>
				<div class="col-md-8 pt-3">
					<div class="card-body">
                        <Link>
                        
                        <h5 className="card-text float-left ml-5 mt-1">
							{"1BR-1BA On the Beach Great Views"}
						</h5>

						<br></br>
						

                        <div
							style={{ float: "clear-both" }}
							className="row col-10 float-left ml-3"
						>
							<div className="col-3 text-left">Condo</div>
							<div className="col-2">1BR</div>
							<div className="col-3">Sleep6</div>
							<div className="col-4">650 Sq-ft</div>
						</div>
                        
                        </Link>
						
					</div>
					<div
						style={{ marginTop: "12%" }}
						className="card-footer overflow-hidden"
					>
						<div className="float-right">
							<div>Premium Partner</div>
							<p>Rating 4.5</p>
						</div>

						<div className="float-left">
							<div>Price</div>
							<p className="mt-0">{`${"price"} pernight`}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ListingCard;
