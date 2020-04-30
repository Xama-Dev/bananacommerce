import React from 'react'
import PropTypes from 'prop-types'

import './CardDeals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardDeals = ({ product }) => {
    let {
        image, currency, price, discount,
        name, seller, costumerAvaliation, constumerComments,
        soldAmount, quantityInStock

    } = product    

    return (
        <div className="card__deals">
            <div className="image-card__deals-container">
                <img src={image} alt="" />
            </div>
            <div className="price-container-card__deals">
                <span>
                    <span className="price__if__discount">
                        {currency}{parseFloat(price - price * discount)
                            .toLocaleString(undefined, { 
                                minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span> <span className="price__original-card__deals">
                        {currency}{(price)
                            .toLocaleString(undefined, { 
                                minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span> <span className="discount-card__deals">
                        {(discount * 100).toFixed(0) + '% off'}
                    </span>
                </span>
            </div>
            <div className="name-product-card__deals">
                <a href="/">
                    <span>{name}</span>
                </a>
            </div>
            <div className="seller-card__deals">
                <span>Sold By:
                    <span className="seller__name-card__deals">
                        {seller}
                    </span>
                </span>
            </div>
            <div className="costumer__avaliation-card__deals-container">
                <div className="costumer__avaliation-card__deals">
                    <div className="costumer__avaliation-stars">                        
                        <FontAwesomeIcon icon={['fas', 'star']} 
                        style={costumerAvaliation >= 1 ? 
                            {color: 'var(--primary-color)'} : {}}/>
                        <FontAwesomeIcon icon={['fas', 'star']} 
                        style={costumerAvaliation >= 2  ? 
                            {color: 'var(--primary-color)'} : {}}/>
                        <FontAwesomeIcon icon={['fas', 'star']} 
                        style={costumerAvaliation >= 3  ? 
                            {color: 'var(--primary-color)'} : {}}/>
                        <FontAwesomeIcon icon={['fas', 'star']} 
                        style={costumerAvaliation >= 4  ? 
                            {color: 'var(--primary-color)'} : {}}/>
                        <FontAwesomeIcon icon={['fas', 'star']} 
                        style={costumerAvaliation == 5  ? 
                            {color: 'var(--primary-color)'} : {}}/>                            
                        
                    </div>
                    <div className="quantity__of__coments-card__deals">
                        <span>
                            {constumerComments < 10 ?  
                                constumerComments = `0${constumerComments}` : constumerComments}
                        </span>
                    </div>
                </div>
            </div>
            <div className="sold__amount-container">
                <div className="bar__sales__progress-wrapper">
                    <div style={{width: `${soldAmount / quantityInStock *100}%`}}></div>
                </div>
                <div className="sold__amount-contianer">
                    <span>Sold: {soldAmount}</span>
                </div>
            </div>
        </div>
    )
}

CardDeals.propTypes = {

    product: PropTypes.object.isRequired
}

export default CardDeals
