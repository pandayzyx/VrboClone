import React from 'react';
import styles from './travelerhelp.module.css';

export default function OwnerHelp() {
    return (
        <div>
            <div className={styles.grid1}>
                <div className={styles.ho}>
                    <div style={{fontSize: '17px', color: 'black', backgroundColor: 'rgba(173, 170, 170, 0.466)', border: '1px solid rgba(173, 170, 170, 0.466)', padding: '10px', textAlign: 'justify'}}>Find Help by Category</div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Getting_Started">Getting Started</a> </div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Your_Account">Your Account</a></div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Your_Listing">Your Listing</a></div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Reservation_Manager">Manage Reservations</a></div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Our_Partners">Our Partners</a></div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Stay_Neighborly">Stay Neighborly</a></div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Taxes">Taxes</a></div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Government_Requirements">Goverments<br /> Requirments</a></div>
                    <div className={styles.leftmenu}> <a className={styles.leftmenu1} href="https://help.vrbo.com/category/Privacy">Privacy</a></div>
                </div>
                <div>
                    <div className={styles.leftmenu}> <a href="https://help.vrbo.com/">Help Home</a> </div>
                    <div style={{fontWeight: 'bolder', fontSize: '17px', padding: '10px', width: '150px'}}>Suggestions</div>
                    <div className={styles.grid2}>
                        <div className='text-muted'>
                            <div className={styles.grid3} style={{marginTop: '30px', marginLeft: '80px'}}>
                                <img src="https://via.placeholder.com/150" className='rounded-circle' style={{marginRight: '10px'}} width='50px' alt=""/>
                                <div style={{textAlign: 'justify'}}>How does novel coronavirus (COVID-19)<br /> affect my property?</div>
                            </div>
                                <hr />
                            <div className={styles.grid3} style={{marginLeft: '80px'}}>
                                <img src="https://via.placeholder.com/150" className='rounded-circle' style={{marginRight: '10px'}} width='50px' alt=""/>
                                <div style={{textAlign: 'justify'}}>What stay Taxes/Lodging Taxes do you collect<br /> and remit?</div>
                            </div>
                                <hr />
                            <div className={styles.grid3} style={{marginLeft: '80px'}}>
                                <img src="https://via.placeholder.com/150" className='rounded-circle' style={{marginRight: '10px'}} width='50px' alt=""/>
                                <div style={{textAlign: 'justify'}}>How do I cancle a traveler's reservation?</div>
                            </div>
                                <hr />
                            <div className={styles.grid3} style={{marginLeft: '80px'}}>
                                <img src="https://via.placeholder.com/150" className='rounded-circle' style={{marginRight: '10px'}} width='50px' alt=""/>
                                <div style={{textAlign: 'justify'}}>How do I manage my rates?</div>
                            </div>
                                <hr />
                            <div className={styles.grid3} style={{marginLeft: '80px'}}>
                                <img src="https://via.placeholder.com/150" className='rounded-circle' style={{marginRight: '10px'}} width='50px' alt=""/>
                                <div style={{textAlign: 'justify'}}>How do I refund a traveler without cancelling <br /> the reservation?</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="https://via.placeholder.com/350x200" style={{marginTop: '10px'}} alt=""/></div>
                            <div><img src="https://via.placeholder.com/350x200" style={{marginTop: '20px'}} alt=""/></div>
                            <div><img src="https://via.placeholder.com/350x200" style={{marginTop: '20px'}} alt=""/></div>
                        </div>
                    </div>
                    <div style={{marginTop: '100px', fontSize: '15px'}}>
                        © 2020 Vrbo, an <span style={{color: 'blue'}}>Expedia Group</span> company. All rights reserved. <br /> <a href='https://www.vrbo.com/legal/terms-and-conditions?_ga=2.18445439.711292096.1595481273-1855678380.1595313332'>Terms and Conditions</a> · <a href='https://www.vrbo.com/legal/privacy-policy?_ga=2.18445439.711292096.1595481273-1855678380.1595313332'>Privacy Policy</a> · <a href='https://www.vrbo.com/dnsmpi?_ga=2.18445439.711292096.1595481273-1855678380.1595313332'>Do Not Sell My Personal Information</a><br />
                        <button type="button" className="btn mt-4 rounded-pill btn-outline-primary">Contact us</button>
                    </div>
                </div>
            </div>            
        </div>
    )
}
