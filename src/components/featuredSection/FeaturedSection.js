import React, { Component } from 'react'
import './FeaturedSection.css'
import cardFeaturedsectionImage1 from '../../img/card-featured__section-img1.jpg'
import cardFeaturedsectionImage2 from '../../img/card-featured__section-img2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BannerCarousel from '../bannerCarousel/BannerCarousel'



class FeaturedSection extends Component {
    render() {
        return(
            <section>
                <div className="container-featured__section">
                    <div className="row-featured__section">
                        <BannerCarousel />
                        <div className="container-cards-featured__section">
                            <div className="card-featured__section">
                                <img src={cardFeaturedsectionImage1} alt=""/>
                                <div className="container-text__card-featured__section">
                                    <h1>
                                        Unio <br/>
                                        Leather <br/>
                                        Bags
                                    </h1>
                                    <p>
                                        100% Leather <br/>
                                        handmade
                                    </p>
                                </div>
                                <div id="featured__off__1" 
                                className="featured__off-card-featured__section">
                                    20% OFF
                                </div>
                            </div>
                            <div className="card-featured__section">
                                <img src={cardFeaturedsectionImage2} alt=""/> 
                                <div className="container-text__card-featured__section">
                                    <h1>
                                        iPhone 6+ <br/>
                                        32Gb
                                    </h1>
                                    <p>
                                        Expirience with <br/>
                                        best smartphone <br/>
                                        on the word
                                    </p>
                                </div>
                                <div id="featured__off__2"
                                className="featured__off-card-featured__section">
                                    20% OFF
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <div className="container-info__cards-featured__section">
                        <div className="wrap-info__cards-featured__section">
                            <div className="column-info__cards-featured__section">
                                <div className="info__card-featured__section">
                                    <FontAwesomeIcon icon={['fas', 'rocket']} />
                                    <div className="text__container-info__card-featured__section">
                                        <h1>Free Delivery</h1>
                                        <p>For all oders over $99</p>
                                    </div>
                                </div>
                                <div className="info__card-featured__section">
                                    <FontAwesomeIcon icon={['fas', 'sync-alt']} />
                                    <div className="text__container-info__card-featured__section">
                                        <h1>90 Days Return</h1>
                                        <p>If goods have problems</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column-info__cards-featured__section">
                                <div className="info__card-featured__section">
                                    <FontAwesomeIcon icon={['far', 'credit-card']} />
                                    <div className="text__container-info__card-featured__section">
                                        <h1>Secure Payment</h1>
                                        <p>100% secure payment</p>
                                    </div>
                                </div>
                                <div className="info__card-featured__section">
                                    <FontAwesomeIcon icon={['far', 'comments']} />
                                    <div className="text__container-info__card-featured__section">
                                        <h1>24/7 Support</h1>
                                        <p>Dedicated support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column-info__cards-featured__section">
                                <div className="info__card-featured__section">
                                    <FontAwesomeIcon icon={['fas', 'gift']} />
                                    <div className="text__container-info__card-featured__section">
                                        <h1>Gift Service</h1>
                                        <p>Support gift service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FeaturedSection