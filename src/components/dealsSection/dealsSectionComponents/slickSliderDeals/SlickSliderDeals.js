import React, { Component} from "react"
import Slider from "react-slick"
import products from '../../../../data/products.json'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './SlickSliderDeals.css'

import CardDeals from '../cardDeals/CardDeals'

class SlickSliderDeals extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: products
        }
    }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1596,
          settings: {
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 1405,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 1123,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 920,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 711,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 479,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }
    return (
      <div className="slick__slider-container">
        <Slider {...settings}>
            {
                this.state.products
                  .map( 
                    product => <CardDeals key={product._id} product={product}/> 
                  )
            }
        </Slider>
      </div>
    )
  }
}
export default SlickSliderDeals 