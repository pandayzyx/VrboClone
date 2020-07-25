import React, { Component } from 'react';
import styles from './navbar.module.css'

export default class ListYourProperty extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className={styles.logo}>
                        <a href="https://www.vrbo.com/">
                            <img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/4.7.0/sitename/vrbo/web/logo.svg" alt="logo"/>
                        </a>
                    </div>
                    <div>
                        <div className={styles.headerright}>
                            <a href="https://www.vrbo.com/l/contact-us/">
                                <span style={{padding: '10px', fontSize: '18px'}}><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                Help
                            </a> 
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.bgimg}>
                        <div className={`card shadow ${styles.propertycard}`}>
                            <div className={`text-muted m-3 ${styles.textalignleft}`}>Step 1 to 3</div>
                            <div style={{fontSize: '42px', textAlign: 'justify', padding: '5px', margin: '10px'}}>See how much you could earn!</div>
                            <div className={`m-3 ${styles.textalignleft}`}>Tell us about your property and see how much you could earn by renting your home on Vrbo.</div>
                            <div className="input-group p-3">
                                <input type="text" class="form-control" placeholder="0 Bedroom" aria-label="bedroom" aria-describedby="button-addon2"></input>
                                <button style={{fontSize: '28px', marginLeft: '10px'}}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                                <button style={{fontSize: '28px', marginLeft: '10px'}}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                            </div>
                        
                            <div className="input-group p-3">
                                <input type="text" class="form-control" placeholder="0 Bathroom" aria-label="bedroom" aria-describedby="button-addon2"></input>
                                <button style={{fontSize: '28px', marginLeft: '10px'}}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                                <button style={{fontSize: '28px', marginLeft: '10px'}}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                            </div>
                            <div style={{width: '430px'}}>
                                <button type="button" className="btn m-3 rounded-pill btn-primary btn-block">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={`card shadow ${styles.propertycard}`}>
                        <div style={{fontSize: '30px', width: '50px', height: '50px'}}><i class="fa fa-home" aria-hidden="true"></i></div>
                        <div style={{fontWeight: 'bolder', fontSize: '22px', textAlign: 'justify', padding: '13px'}}>Already a host on another travel site?</div>
                        <div style={{textAlign: 'justify', padding: '13px', marginBottom: '15px'}}>We have a dedicated team standing by to help you build your listing. Call <span style={{color: 'blue'}}>1-888-337-0689</span> to get started.</div>
                    </div>
                </div>
                <div className="container">
                    <div style={{fontWeight: 'bolder', fontSize: '37px', padding: '20px'}}>Simply the perfect vacation rental marketplace</div>
                    <div className={styles.grid1}>
                        <div>
                            <div className='p-3'>
                                <img src="https://www.vrbo.com/list/static/images/keychain.svg" alt="keychain"/>
                            </div>
                            <div style={{fontWeight: 'bolder', fontSize: '23px'}}>Your rental, your way</div>
                            <div className='p-3'>Set your price, dates, rules, and more.<br/> We give you the tools to make sure<br/> you’re in control.</div>
                        </div>
                        <div>
                            <div className='p-3'>
                                <img src="https://www.vrbo.com/list/static/images/millions-of-travlers.svg" width='60px' alt="millions"/>
                            </div>
                            <div style={{fontWeight: 'bolder', fontSize: '23px'}}>Millions of travelers.</div>
                            <div className='p-3'>Put your home in front of a global<br/> network of travelers looking for the<br/> perfect match.</div>
                        </div>
                        <div>
                            <div className='p-3'>
                                <img src="https://www.vrbo.com/list/static/images/shield.svg" alt="sheild"/>
                            </div>
                            <div style={{fontWeight: 'bolder', fontSize: '23px'}}>We’re here for you, 24/7</div>
                            <div className='p-3'>A dedicated support team is ready<br/> around the clock to make sure that<br/> everything runs smoothly.</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.grid2}>
                        <div style={{width: '600px', marginTop: '50px'}}>
                            <img src="https://www.vrbo.com/list/static/images/how-this-works.svg" alt="works"/>
                        </div>
                        <div>
                            <div style={{textAlign: 'justify', fontWeight: 'bolder', fontSize: '40px'}}>How this works</div>
                            <div style={{textAlign: 'justify', fontWeight: 'bolder', fontSize: '22px'}} className='my-3'>1 Set up your property</div>
                            <div style={{textAlign: 'justify', width: '370px'}}>Explain what's unique, show off with photos, and set the right price</div>
                            <div style={{textAlign: 'justify', fontWeight: 'bolder', fontSize: '22px'}} className='my-3'>2 Start earning</div>
                            <div style={{textAlign: 'justify', width: '370px'}}>We’ll help you collect payment, deduct a commission, and send you the balance</div>
                            <div style={{textAlign: 'justify', fontWeight: 'bolder', fontSize: '22px'}} className='my-3'>3 Get the perfect match</div>
                            <div style={{textAlign: 'justify', width: '370px'}}>We’ll connect you with travelers from home and abroad</div>
                            <div className='mt-5'><button type="button" className="btn rounded-pill btn-outline-primary btn-block">See what could you earn</button></div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: 'blue', height: '300px', marginTop: '50px'}}>
                    <div style={{height: '80px'}}></div>
                    <div style={{fontSize: '42px', color: 'white'}}>Are you a property manager?</div>
                    <div style={{color: 'white'}}>If you manage more than 10 properties, you might consider signing up as a property manager.</div>
                    <div className='mt-3'> 
                        <a href="https://www.vrbo.com/l/property-managers"> 
                            <button type="button" class="btn btn-outline-light rounded-pill">Learn more</button> 
                        </a> 
                    </div>
                </div>
                <div className='text-muted my-4 p-3' style={{textAlign: 'justify'}}>
                    <div>
                        COMPLIANCE NOTICE: Please be aware that short-term rentals are subject to local laws that provide who may rent their property and how such rentals may operate. You should review local laws to determine whether your property may be made available for rent and the requirements with which you must comply. Many jurisdictions require a license before renting. Penalties include fines and other enforcement. Vrbo has not determined whether your property may qualify as a short-term rental and this communication from Vrbo should not be considered as any indication that your property rental is allowable under applicable laws.
                    </div>
                    <div className='text-muted my-4' style={{textAlign: 'justify'}}>
                        EARNINGS ESTIMATES: Revenue amounts stated in our ads and on this page are only estimates and your income will vary from them. While estimates are based upon data from homes that are listed for rent on our site, this figure is only an average and does not result from a professional analysis for your individual home and rental business. Estimates on this page are based upon our data for the top 10% of properties in your area with similar guest capacity. Estimates in our ads are based upon the data stated in the ad and may be broader. All estimates assume that you maintain a high level of occupancy. Your rental fees are chosen by you, and subject to local regulations and taxes.
                    </div>
                </div>
                <div className={styles.grid1}>
                    <div className={`mt-3 ${styles.logo}`}>
                        <a href="https://www.vrbo.com/">
                            <img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/4.7.0/sitename/vrbo/web/logo.svg" alt="logo"/>
                        </a>
                    </div>
                    <div className={`row mt-0 ${styles.header}`}>
                        <div className={`col ${styles.box}`}>
                            <div>© 2020 Vrbo, an<span className={styles.blue}> Expedia Group </span>company. All rights reserved.</div>
                            <div className={styles.blue}> 
                                <a href="https://www.vrbo.com/legal/terms-and-conditions">Terms and Conditions</a> ·
                                <a href="https://www.vrbo.com/legal/privacy-policy">Privacy Policy</a>  · 
                                <a href="https://www.vrbo.com/dnsmpi">Do Not Sell My Personal Information</a> 
                            </div>
                        </div>
                        <div className={`col ${styles.box}`}>
                            <div>
                                <a href="http://youtube.com/vrbo"><span className={styles.iconsize}><i class="fa fa-youtube" aria-hidden="true"></i></span></a>
                                <a href="http://twitter.com/vrbo"><span className={styles.iconsize}><i class="fa fa-twitter" aria-hidden="true"></i></span></a>
                                <a href="http://pinterest.com/vrbo"><span className={styles.iconsize}><i class="fa fa-pinterest" aria-hidden="true"></i></span></a>
                                <a href="http://linkedin.com/company/vrbo"><span className={styles.iconsize}><i class="fa fa-linkedin" aria-hidden="true"></i></span></a>
                                <a href="http://instagram.com/vrbo"><span className={styles.iconsize}><i class="fa fa-instagram" aria-hidden="true"></i></span></a>
                                <a href="http://facebook.com/VRBO"><span className={styles.iconsize}><i class="fa fa-facebook-official" aria-hidden="true"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
