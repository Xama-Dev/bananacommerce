import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import './CardDeals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CardDeals extends Component {

    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div className="card__deals">
                <div className="image-card__deals-container">
                    <a href="/">
                        <img src={this.props.image} alt="" />
                    </a>
                </div>
                <div className="buttons-card__deals-container">
                    <div className="buttons-card__deals-wrapper">
                        <Tippy content="Add to cart">
                            <button>
                                <FontAwesomeIcon icon={['fas', 'shopping-bag']} />
                            </button>
                        </Tippy>
                        <Tippy content="Quick View">
                            <button>
                                <FontAwesomeIcon icon={['far', 'eye']} />
                            </button>
                        </Tippy>
                        <Tippy content="Browse Whishlist">
                            <button>
                                <FontAwesomeIcon icon={['far', 'heart']} />
                            </button>
                        </Tippy>
                        <Tippy content="Compare">
                            <button>
                                <FontAwesomeIcon icon={['far', 'chart-bar']} />
                            </button>
                        </Tippy>
                    </div>
                </div>
                <div className="price-container-card__deals">
                    <span>
                        <span className="price__if__discount">
                            {this.props.currency}{parseFloat(this.props.price - this.props.price * this.props.discount)
                                .toLocaleString(undefined, {
                                    minimumFractionDigits: 2, maximumFractionDigits: 2
                                })}
                        </span> <span className="price__original-card__deals">
                            {this.props.currency}{(this.props.price)
                                .toLocaleString(undefined, {
                                    minimumFractionDigits: 2, maximumFractionDigits: 2
                                })}
                        </span> <span className="discount-card__deals">
                            {(this.props.discount * 100).toFixed(0) + '% off'}
                        </span>
                    </span>
                </div>
                <div className="name-product-card__deals">
                    <a href="/">
                        <span>{this.props.name}</span>
                    </a>
                </div>
                <div className="seller-card__deals">
                    <span>Sold By:
                    <span className="seller__name-card__deals">
                            {this.props.seller}
                        </span>
                    </span>
                </div>
                <div className="costumer__avaliation-card__deals-container">
                    <div className="costumer__avaliation-card__deals">
                        <div className="costumer__avaliation-stars">
                            <FontAwesomeIcon icon={['fas', 'star']}
                                style={this.props.costumerAvaliation >= 1 ?
                                    { color: 'var(--primary-color)' } : {}} />
                            <FontAwesomeIcon icon={['fas', 'star']}
                                style={this.props.costumerAvaliation >= 2 ?
                                    { color: 'var(--primary-color)' } : {}} />
                            <FontAwesomeIcon icon={['fas', 'star']}
                                style={this.props.costumerAvaliation >= 3 ?
                                    { color: 'var(--primary-color)' } : {}} />
                            <FontAwesomeIcon icon={['fas', 'star']}
                                style={this.props.costumerAvaliation >= 4 ?
                                    { color: 'var(--primary-color)' } : {}} />
                            <FontAwesomeIcon icon={['fas', 'star']}
                                style={this.props.costumerAvaliation === 5 ?
                                    { color: 'var(--primary-color)' } : {}} />

                        </div>
                        <div className="quantity__of__coments-card__deals">
                            <span>
                                {this.props.costumerComments}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sold__amount-container">
                    <div className="bar__sales__progress-wrapper">
                        <div style={
                            { width: `${this.props.soldAmount / this.props.quantityInStock * 100}%` }}>
                        </div>
                    </div>
                    <div className="sold__amount-contianer">
                        <span>Sold: {this.props.soldAmount}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardDeals
