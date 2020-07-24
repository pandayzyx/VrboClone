import React, { Component } from 'react';
import styles from './navbar.module.css'

export default class ListYourProperty extends Component {
    render() {
        return (
            <div>
                <div className={styles.header}>
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
                    <div>
                        <div className={`card shadow ${styles.propertycard}`}>
                            <div className={`text-muted m-3 ${styles.textalignleft}`}>Step 1 to 3</div>
                            <div style={{fontSize: '42px', textAlign: 'justify', padding: '5px', margin: '10px'}}>See how much you could earn!</div>
                            <div className={`m-3 ${styles.textalignleft}`}>Tell us about your property and see how much you could earn by renting your home on Vrbo.</div>
                                          
                        </div>
                        <img src="https://www.vrbo.com/list/static/images/lyp-hero.svg" alt="property"/>
                    </div>
                </div>
            </div>
        )
    }
}
