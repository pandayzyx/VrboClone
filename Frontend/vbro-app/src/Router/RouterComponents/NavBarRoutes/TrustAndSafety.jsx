import React from 'react';
import styles from './trustandsafety.module.css';

export default function TrustAndSafety() {
    return (
        <div>
            <div>
                <img src="https://www.vrbo.com/trust/static/16fe6fafadc00b9c94694b34018c6c8e/2f1b1/hero.jpg" width='1100px' alt="hero"/>
                <div style={{fontSize: '42px', fontWeight: 'bolder', marginLeft: '-500px', marginTop: '30px'}}>Trust & Safety</div>
                <div className='text-muted' style={{textAlign: 'justify', marginLeft: '280px'}}>Vrbo is a global community built on trust and inclusion. We're dedicated to providing a safe and secure marketplace for travelers,<br /> owners and property managers, and we're here to support you 24/7 whenever you have questions or need a hand.</div>
            </div>
            
            {/* Home */}
            <div className={styles.grid1} style={{marginTop: '100px'}}>
                <div style={{marginLeft: '200px'}}>
                    <img src="https://www.vrbo.com/trust/static/40d1d0df77c40f7ced3022c98c3b225e/2f1b1/trust.jpg" width='450px' alt="trust"/>
                </div>
                <div style={{borderBottom: 'solid', borderBottomColor: 'rgb(222, 222, 222)'}}>
                    <div style={{fontSize: '52px', marginTop: '150px'}}>TRUST</div>
                    <div style={{textAlign: 'justify', marginLeft: '170px'}} className='text-muted'>
                        Trust is essential to a marketplace that works. With secure payments, fraud protection and authentic reviews for both owners and travelers, we make sure all members of our community can stay and rent with confidence.
                    </div>
                </div>
            </div>
            <div className={styles.grid1} style={{marginTop: '100px'}}>
                <div>
                    <div style={{fontSize: '52px', marginTop: '150px', marginLeft: '150px'}}>Security</div>
                    <div style={{textAlign: 'justify', marginLeft: '250px'}} className='text-muted'>
                        Keeping your account safe and secure is a top priority. From payment protection to fraud prevention, we have tools in place to reduce risks in financial transactions and maintain trust between parties that may not know each other.
                    </div>
                </div>
                <div style={{marginLeft: '00px', borderBottom: 'solid', borderBottomColor: 'rgb(222, 222, 222)'}}>
                    <img src="https://www.vrbo.com/trust/static/d97f6d073f3fb577c7d0c4bd1674280c/2f1b1/security.jpg" width='450px' alt="security"/>
                </div>
            </div>
            <div className={styles.grid1} style={{marginTop: '100px'}}>
                <div style={{marginLeft: '200px'}}>
                    <img src="https://www.vrbo.com/trust/static/3a8c20c0927c36d7a0497339253e23e4/2f1b1/safety.jpg" width='450px' alt="safety"/>
                </div>
                <div style={{borderBottom: 'solid', borderBottomColor: 'rgb(222, 222, 222)'}}>
                    <div style={{fontSize: '52px', marginTop: '150px'}}>Safety</div>
                    <div style={{textAlign: 'justify', marginLeft: '170px'}} className='text-muted'>
                        Vrbo offers a range of tools and resources that protect the privacy and safety of travelers and owners. We support owners by educating them about best practices for creating safe and private spaces for travelers, and we use technology to verify the identities of owners and travelers whenever possible. We advise our community to follow state and local laws that may apply.
                    </div>
                </div>
            </div>
            <div className={styles.grid1} style={{marginTop: '100px'}}>
                <div>
                    <div style={{fontSize: '52px', marginTop: '150px', marginLeft: '150px'}}>Support</div>
                    <div style={{textAlign: 'justify', marginLeft: '250px'}} className='text-muted'>
                        We have teams around the world on call 24 hours a day, seven days a week in nearly a dozen languages to support travelers, owners and property managers who require assistance or have questions. If there's anything you need, please get in touch.
                    </div>
                </div>
                <div style={{marginLeft: '00px', borderBottom: 'solid', borderBottomColor: 'rgb(222, 222, 222)'}}>
                    <img src="https://www.vrbo.com/trust/static/84a3e515c18bb16022b34f5aff5d4193/2f1b1/support.jpg" width='450px' alt="support"/>
                </div>
            </div>
            <div className={styles.grid1} style={{marginTop: '100px'}}>
                <div style={{marginLeft: '200px'}}>
                    <img src="https://www.vrbo.com/trust/static/fe746d98a508ca3344f9221a72701f4a/2f1b1/inclusion.jpg" width='450px' alt="Inclusion"/>
                </div>
                <div>
                    <div style={{fontSize: '52px', marginTop: '150px'}}>Inclusion</div>
                    <div style={{textAlign: 'justify', marginLeft: '170px'}} className='text-muted'>
                        Vrbo is an inclusive marketplace committed to accessibility, tolerance and respect, ensuring that everyone has equal protections and equal opportunities. We believe that every member of our community should feel welcome and respected, no matter their background.
                    </div>
                </div>
            </div>            
        </div>
    )
}
