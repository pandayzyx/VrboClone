import React from "react";
import styles from './entity.module.css';
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class EntityPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    

    render(){

        var perNightPrice = '$ ' + 52 + '.00 '
        var guests = 2
        var bedroom = 1
        var bathroom = 1
        var nights = 1
        var total = 406 + '.00'
        var cancellationUntil = 'Dec 10, 2020'
        var PropertyTitle = 'Comfortable rooms Stay near Miramar Beach'
        var PropertyReviews = [1, 2, 3, 4, 5]
        var PropertyType = ['Villa', 'Apartment or condo', 'House', 'Studio', 'Cabin', 'Cottage', 'Bungalow', 'Bed & breakfast', 'Guest house', 'Castle', 'Chateau/country house', 'Estate', 'Boat', 'Yacht', 'Lodge', 'Farmhouse', 'Barn', 'RV', 'Tower', 'Chalet', 'Townhouse', 'Resort', 'Hotel', 'Houseboat', 'Mill']
        var PropertyFeatures = ['Air conditioning', 'Pool', 'Private pool', 'Internet or Wifi', 'Washer', 'Dryer', 'Stove', 'Oven', 'Parking available', 'TV', 'Hot tub', 'Bed linens provided', 'Outdoor grill', 'Dishwasher', 'Fireplace', 'Microwave', 'Iron and board', 'Crib', 'Kids high chair'] 
        var PropertyLocation = ['Oceanfront', 'Beachfront', 'Beach', 'Ocean', 'Downtown', 'Beach view', 'Lake', 'Mountains', 'Rural', 'Ski-in/ski-out', 'Village']
        var NearbyActivities = ['Spa and wellness', 'Theme parks', 'Zoo or wildlife viewing', 'Museums', 'Golfing', 'Fishing', 'Skiing or snowboarding', 'Hiking', 'Shopping', 'Cycling', 'Horseback riding', 'Watersports', 'Scuba diving or snorkeling', 'Rock or mountain climbing', 'Casinos']
        var BookingOptions = ['Instant Confirmation', '24 Hour Confirmation']
        var PropertyDescription = 'The location of this property is definitely the best feature which compels one to book the place. The comforts are just like a home, for unbelievably reasonable tariffs. The rooms are simple and classy, with comfortable beds and ample space for luggage. They are well lit up by natural light.All homely comforts are provided like free Wi-Fi, TV, AC, geyser and parking facility, they also accept card payment at the time of checkout.'

        return(
            <div>
                <div className={styles.grid1}>
                    <div>
                        <div id="carouselExampleInterval" class="carousel slide" style={{width: '500px', marginLeft: '200px'}} data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-interval="5000">
                                  <img src="https://via.placeholder.com/50" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-interval="2000">
                                  <img src="https://via.placeholder.com/50" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                  <img src="https://via.placeholder.com/50" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <div className='container'>
                            <div class="card text-center">
                                <div class="card-header">
                                    <ul class="nav nav-tabs card-header-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">Overview</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Amenities</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Policies</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Reviews</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Map</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Owner</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Rates & Availabities</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-justify">{PropertyTitle}</h5>
                                    {/* <p class="card-text"></p> */}
                                    <div style={{textAlign: 'justify'}}>
                                        <div><span style={{marginRight: '10px'}}><i class="fa fa-home" aria-hidden="true"></i></span>{PropertyType[2]}</div>
                                        <div><span style={{marginRight: '10px'}}><i class="fa fa-users" aria-hidden="true"></i></span>sleeps: {guests}</div>
                                        <div><span style={{marginRight: '10px'}}><i class="fa fa-bed" aria-hidden="true"></i></span>Bedrooms: {bedroom}</div>
                                        <div><span style={{marginRight: '10px'}}><i class="fa fa-bath" aria-hidden="true"></i></span>Bathrooms: {bathroom}</div>
                                        <div><span style={{marginRight: '10px'}}><i class="fa fa-moon" aria-hidden="true"></i></span>Min Stay: {nights} night</div>
                                    </div>
                                    <hr/>
                                    <div style={{display: 'flex'}}>
                                        {/* <div style={{flex: 'left', marginRight: '30px', backgroundColor: 'rgb(222, 222, 222)'}}>Instant Confirmation</div>
                                        <div style={{backgroundColor: 'rgb(222, 222, 222)'}}>No Smoking</div> */}
                                        {PropertyFeatures.map(item => (
                                            <div style={{backgroundColor: 'rgb(222, 222, 222)', margin: '5px'}}>{item}</div>
                                        ))}
                                    </div>
                                    <hr/>
                                    <div style={{textAlign: 'justify', marginTop: '30px', color: 'gray'}}>
                                            {PropertyDescription}
                                    </div>
                                    <h5 class="font-bolder text-justify mt-5">Bedrooms</h5>
                                    <div style={{display: 'flex', marginTop: '30px'}}>
                                        <div style={{flex: 'left', marginRight: '30px', backgroundColor: 'rgb(222, 222, 222)'}}><span style={{marginRight: '10px'}}><i class="fa fa-bed" aria-hidden="true"></i></span>Bedrooms: {bedroom}</div>
                                        <div style={{backgroundColor: 'rgb(222, 222, 222)'}}><span style={{marginRight: '10px'}}><i class="fa fa-users" aria-hidden="true"></i></span>sleeps: {guests}</div>
                                    </div>
                                    <h5 class="font-bolder text-justify mt-5">Amenities</h5>
                                    <hr/>
                                        <h6 class="font-bolder text-justify my-3">Featured</h6>
                                        {/* <div style={{backgroundColor: 'rgb(222, 222, 222)', width: '130px'}}><span style={{marginRight: '10px'}}><i class="fa fa-fire" aria-hidden="true"></i></span>No Smoking</div> */}
                                        <div style={{display: 'flex'}}>
                                            {PropertyFeatures.map(item => (
                                                <div style={{backgroundColor: 'rgb(222, 222, 222)', margin: '5px'}}>{item}</div>
                                            ))}
                                        </div>
                                    <hr/>
                                    <h6 class="text-justify my-3">Bathrooms</h6>
                                            <div style={{width: '130px', backgroundColor: 'rgb(222, 222, 222'}}><span style={{marginRight: '10px'}}><i class="fa fa-bath" aria-hidden="true"></i></span>Bathrooms: {bathroom}</div>
                                    <h5 class="font-bolder text-justify mt-5">Policies</h5>
                                    <h6 class="font-bolder text-justify mt-4 mb-2">Cancellation Policy</h6>
                                    <hr/>
                                    <div style={{fontWeight: 'bolder'}} className='text-justify p-1'>100% refund <span style={{fontWeight: 'normal'}}>if you cancel by {cancellationUntil}</span></div>
                                            <div style={{fontWeight: 'bolder'}} className='text-justify p-1'>50% refund <span style={{fontWeight: 'normal'}}>(minus the service charges) if you cancel at {cancellationUntil}</span></div>
                                            <div style={{fontWeight: 'bolder'}} className='text-justify p-1'>No refund <span style={{fontWeight: 'normal'}}>if you cancel after {cancellationUntil}</span></div>
                                    <div className='text-justify p-1'>Learn more about our<span><a href='https://help.vrbo.com/articles/What-is-the-cancellation-policy?_ga=2.211335123.711292096.1595481273-1855678380.1595313332'> cancellation policies</a></span></div>
                                    <h6 class="text-justify mt-4 mb-2">Damage and Incidentals</h6>
                                    <hr/>
                                    <div className='text-justify p-1'>You will be responsible for any damage to the rental property caused by you or your party during your stay.</div>
                                    <h6 class="text-justify mt-4 mb-2">House Rules</h6>
                                    <div style={{display: 'flex', marginTop: '20px'}}>
                                        <div style={{flex: 'left', marginRight: '30px'}}><i class="fa fa-sign-in" aria-hidden="true"></i><span> Check in after: </span>4: 00 PM</div>
                                        <div><i class="fa fa-sign-out" aria-hidden="true"></i><span> Check out before: </span>10: 00 AM</div>
                                    </div>
                                    <hr/>
                                    <div style={{width: '150px'}}>
                                        <ul>
                                            <li>Max guest: 2</li>
                                        </ul>
                                    </div>
                                    <h5 className="text-justify mt-5 mb-3">0 Reviews</h5>
                                    <div className='text-justify'>This property doesn't have any reviews yet.</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '350px', height: '500px'}}>
                        <div className={styles.grid1}>
                            <div style={{fontSize: '32px'}}>{perNightPrice} <span style={{fontSize: '10px'}} className='text-muted'>per night</span></div>
                            <div>
                                <div><button type="button" class="btn btn-outline-dark m-1"><span className='m-2' style={{color: 'red'}}><i class="fa fa-heart-o" aria-hidden="true"></i></span>Save</button></div>
                                <div><button type="button" class="btn btn-outline-dark m-1"><span className='m-1'><i class="fa fa-share-square-o" aria-hidden="true"></i></span>Share</button></div>
                            </div>
                        </div>
                        <div style={{marginLeft: '20px', width: '200px'}}><span style={{color: 'green', borderRadius: '40px', border: '2px solid green', marginRight: '5px'}}><i class="fa fa-check" aria-hidden="true"></i></span>Your dates are available</div>
                        <div className={`p-2 ${styles.grid2}`} style={{marginTop: '20px',textAlign: 'justify'}}>
                            <div>
								{/* Arrival */}
								<DateRangePicker
									startDate={this.state.startDate}
									startDateId="your_unique_start_date_id"
									endDate={this.state.endDate}
									endDateId="your_unique_end_date_id"
									onDatesChange={({ startDate, endDate }) =>
										this.setState({ startDate, endDate })
									}
									focusedInput={this.state.focusedInput}
									onFocusChange={(focusedInput) =>
										this.setState({ focusedInput })
									}
									startDatePlaceholderText="Arrival"
									endDatePlaceholderText="Departure"
								></DateRangePicker>
							</div>

                            <div className='border' style={{width: '285px'}}>
                                <div className='text-muted'>Guests</div>
                                <div>{guests} guests</div>
                            </div>
                        </div>
                        <div className={styles.grid1} style={{marginTop: '20px'}}>
                            <div style={{textAlign: 'justify', marginLeft: '20px'}}>
                                <div style={{fontWeight: 'bolder'}}>Total</div>
                                <div className='text-muted'>Includes taxes and fees</div>
                            </div>
                            <div style={{textAlign: 'right', marginRight: '20px'}}>
                                <div style={{fontWeight: 'bolder'}}>$ {total}</div>
                                <div style={{color: 'blue'}}>View Details</div>
                            </div>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary rounded-pill btn-lg mt-4">Book Now</button>
                        </div>
                        <div style={{marginTop: '20px'}}><span><i class="fa fa-repeat" aria-hidden="true"></i></span><span style={{fontWeight: 'bolder', marginLeft: '5px'}}>Free Cancellation</span><span style={{fontSize: '10px', marginLeft: '5px'}}>until {cancellationUntil}</span></div>
                    </div>                        
                </div>                
            </div>
        )
    }
}
export default EntityPage