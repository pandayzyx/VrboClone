import React from "react";
import { Link } from "react-router-dom";
import styles from './HomeCard2.module.css'

function HomeCard(props) {
	var { title, address } = props;
	return (
		<>
			<div class={styles.zoom} style={{ width: "18rem;" }}>
				<Link>
					<img
						style={{ height: "200px" }}
						class="card-img-top"
						src={address}
						alt="Card image cap"
					></img>
				</Link>
			</div>
			<Link>
				<h6 className="float-left mt-2 text-dark"> {title}</h6>
			</Link>
		</>
	);
}
export default HomeCard;
