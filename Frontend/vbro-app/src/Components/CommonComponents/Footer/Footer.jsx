import React from "react";
import styles from "./footer.module.css";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<div className={`container ${styles.header}`}>
					<div className={styles.logo}>
						<a href="https://www.vrbo.com/">
							<img
								src="https://csvcus.homeaway.com/rsrcs/cdn-logos/4.7.0/sitename/vrbo/web/logo.svg"
								alt="logo"
							/>
						</a>
					</div>
					<div className="row">
						<div className={`col ${styles.box}`}>
							<div className="row">
								<div className={`col-6 ${styles.box2}`}>
									<div style={{ fontWeight: "bolder" }}>Explore Vrbo</div>
									<div style={{ marginTop: "20px" }}>
										{" "}
										<a href="https://www.vrbo.com/lyp?">
											List your property
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.vrbo.com/l/travel-with-confidence">
											Book with Confidence
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.vrbo.com/trust">Trust & Safety</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.vrbo.com/discoveryhub">
											Discovery Hub
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://community.vrbo.com/s/?_ga=2.13073137.711292096.1595481273-1855678380.1595313332">
											Communnity
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.vrbo.com/vacation-ideas">
											Vacation rental guides
										</a>{" "}
									</div>
								</div>
								<div className={`col-6 ${styles.box2}`}>
									<div style={{ fontWeight: "bolder" }}>
										Meet the Vrbo family
									</div>
									<div style={{ marginTop: "20px" }}>
										{" "}
										<a href="https://www.vrbo.com/">Vrbo</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.homelidays.com/?_ga=2.242718404.711292096.1595481273-1855678380.1595313332">
											Homelidays.com
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.abritel.fr/?_ga=2.242718404.711292096.1595481273-1855678380.1595313332">
											Abritel.fr
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.fewo-direkt.de/?_ga=2.180739681.711292096.1595481273-1855678380.1595313332">
											FeWo-direkt.de
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.bookabach.co.nz/">
											Bookabach.co.nz
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.stayz.com.au/?_ga=2.180739681.711292096.1595481273-1855678380.1595313332">
											Stayz.com.au
										</a>{" "}
									</div>
								</div>
								<div className={`col-6 ${styles.box2}`}>
									<div style={{ fontWeight: "bolder" }}>Company</div>
									<div style={{ marginTop: "20px" }}>
										{" "}
										<a href="https://www.vrbo.com/l/about-vrbo">About</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://lifeatexpediagroup.com/brands?utm_source=vrbo&%3Butm_medium=homepage%23brands-vrbo">
											Careers
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.vrbo.com/l/affiliates">
											Affiliates
										</a>{" "}
									</div>
									<div>
										{" "}
										<a href="https://www.vrbo.com/info/media-center/">
											Media Center
										</a>{" "}
									</div>
								</div>
							</div>
						</div>
						<div className={`col ${styles.box}`}>
							<div
								style={{
									fontWeight: "bolder",
									fontSize: "16px",
									textAlign: "justify",
								}}
							>
								Get special offers, travel inspiration, and more from Vrbo
							</div>
							<div>
								<div class="input-group my-3">
									<input
										style={{ height: "50px" }}
										type="text"
										class="form-control"
										placeholder="Email Address"
										aria-label="Email Address"
										aria-describedby="button-addon2"
									/>
									<div class="input-group-append">
										<button
											class="btn btn-primary"
											type="button"
											id="button-addon2"
										>
											Subscribe
										</button>
									</div>
								</div>
							</div>
							<div
								style={{
									fontWeight: "bolder",
									fontSize: "16px",
									marginTop: "50px",
									textAlign: "justify",
								}}
							>
								Get the Vrbo mobile app
							</div>
							<div>
								<div class="input-group my-3">
									<select
										class="col-2 custom-select"
										style={{ height: "50px" }}
									>
										{/* <option selected>Open this select menu</option> */}
										<option value="1" selected>
											One
										</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
									<input
										style={{ height: "50px" }}
										type="text"
										class="form-control"
										placeholder="Your mobile phone number"
										aria-label="Your mobile phone number"
										aria-describedby="button-addon2"
									/>
									<div class="input-group-append">
										<button
											class="btn btn-primary"
											type="button"
											id="button-addon2"
										>
											Send
										</button>
									</div>
								</div>
								<small className="text-muted">
									Available for iOS and Android. Messaging rates may apply.
								</small>
							</div>
						</div>
					</div>
					<div className={`row ${styles.header}`}>
						<div className={`col ${styles.box}`}>
							<div>
								© 2020 Vrbo, an
								<span className={styles.blue}> Expedia Group </span>company. All
								rights reserved.
							</div>
							<div className={styles.blue}>
								<a href="https://www.vrbo.com/legal/terms-and-conditions">
									Terms and Conditions
								</a>{" "}
								·
								<a href="https://www.vrbo.com/legal/privacy-policy">
									Privacy Policy
								</a>{" "}
								·
								<a href="https://www.vrbo.com/dnsmpi">
									Do Not Sell My Personal Information
								</a>
							</div>
						</div>
						<div className={`col ${styles.box}`}>
							<div>
								<a href="http://youtube.com/vrbo">
									<span className={styles.iconsize}>
										<i class="fa fa-youtube" aria-hidden="true"></i>
									</span>
								</a>
								<a href="http://twitter.com/vrbo">
									<span className={styles.iconsize}>
										<i class="fa fa-twitter" aria-hidden="true"></i>
									</span>
								</a>
								<a href="http://pinterest.com/vrbo">
									<span className={styles.iconsize}>
										<i class="fa fa-pinterest" aria-hidden="true"></i>
									</span>
								</a>
								<a href="http://linkedin.com/company/vrbo">
									<span className={styles.iconsize}>
										<i class="fa fa-linkedin" aria-hidden="true"></i>
									</span>
								</a>
								<a href="http://instagram.com/vrbo">
									<span className={styles.iconsize}>
										<i class="fa fa-instagram" aria-hidden="true"></i>
									</span>
								</a>
								<a href="http://facebook.com/VRBO">
									<span className={styles.iconsize}>
										<i class="fa fa-facebook-official" aria-hidden="true"></i>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;
