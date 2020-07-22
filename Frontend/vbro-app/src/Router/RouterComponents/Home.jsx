import React from "react";
import Carousel from "react-elastic-carousel";
import HomeCard from "../../Components/CommonComponents/Cards/HomeCard/HomeCard";
import HomeCard2 from "../../Components/CommonComponents/Cards/HomeCard/HomeCard2";
import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";
import { Card } from "react-bootstrap";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 4 },
];

function Home() {
	console.log(data.crousel1);
	return (
		<div className="container">
			<div>
				<h4 style={{ marginLeft: "6%" }} className="float-left mb-3">
                Find spaces that suit your style
				</h4>
				<Carousel breakPoints={breakPoints}>
					{data.crousel2.map((item) => (
						<div className="p-1">
							<HomeCard2 text = {item.text} address={item.address} title={item.name} />
						</div>
					))}
				</Carousel>
			</div>
			<div>
				<h4 style={{ marginLeft: "6%" }} className="float-left mb-3">
					Best places in the United States for going to the beach
				</h4>
				<Carousel breakPoints={breakPoints}>
					{data.crousel1.map((item) => (
						<div className="p-1">
							<HomeCard address={item.address} title={item.name} />
						</div>
					))}
				</Carousel>
			</div>

			<div>
				<h4 style={{ marginLeft: "6%" }} className="float-left mb-3">
					Best places in the United States for nature
				</h4>
				<Carousel breakPoints={breakPoints}>
					{data.crousel1.map((item) => (
						<div className="p-1">
							<HomeCard address={item.address} title={item.name} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}
export default Home;
