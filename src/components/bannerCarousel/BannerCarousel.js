import React, { Component } from 'react'
import './BannerCarousel.css'

import bannerslideImg1 from '../../img/bannerslide-img1.jpg'
import bannerslideImg2 from '../../img/bannerslide-img2.jpg'
import bannerslideImg3 from '../../img/bannerslide-img3.jpg'

import { bannercarouselSystem } from './bannercarouselSystem' 

class BannerCarousel extends Component {

    componentDidMount() {
        bannercarouselSystem()
    }

    render() {
        return (
            <div className="wrap-bannercarousel">
                <div className="bannercarousel-container">
                    <div className="slide-banner bannercarousel-fade slide-banner-active">
                        <img src={bannerslideImg1} alt="bannerimg1" />
                        <div className="promo-description">
                            <h1>Limited Edtion</h1>
                            <p>escadinavian <br/>
                            colection for you <br/>
                            bedroom just <span className="promo-description-price">$599</span></p>                        
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="slide-banner bannercarousel-fade">
                        <img id="airconditioner-electrolux-img" src={bannerslideImg2} alt="bannerimg1" />
                        <div className="promo-description">
                            <h1>Weekend Promotion</h1>
                            <p>Happy summer <br/>
                            combo super cool<br/> 
                            up to just <span className="promo-description-off">40% off</span></p>                        
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="slide-banner bannercarousel-fade">
                        <img id="tv-samsung-img" src={bannerslideImg3} alt="bannerimg1" />
                        <div className="promo-description">
                            <h1>Samsung</h1>
                            <p>Smart tv 43 inch, <br/> 
                            os 4k vfull hd <br/>
                            tizen <span className="promo-description-off">30% off</span></p>                        
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="wrap-buttons-container">
                        <div className="buttons-container">
                            <button className="btn-prev"></button>
                            <div className="bannercarousel-dots-container">
                                <button className="bannercarousel-dot bannercarousel-dot-active"></button>
                                <button className="bannercarousel-dot"></button>
                                <button className="bannercarousel-dot"></button>
                            </div>
                            <button className="btn-next"></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerCarousel