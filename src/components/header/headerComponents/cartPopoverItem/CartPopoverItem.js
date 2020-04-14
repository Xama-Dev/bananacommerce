import React, { Component } from 'react'
import './CartPopoverItem.css'

import bagArmyImg from '../../../../img/bag-army.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CartPopoverItem extends Component {
    render() {
        return(
            <div className="cart-item">
                <a href="">
                    <img src={this.props.imgCartPopoverItem} alt=""/>
                </a>
                <div className="product-cart-info">
                    <a href="">
                    <p className="product-cart-name">{this.props.nameCartPropoverItem}</p>
                    </a>
                    <p className="seller-cart-name">Sold By: <span>{this.props.nameSellerCartPropoverItem}</span></p>
                    <span className="price-cart-name">
                        1 × 
                        <span>
                            <span> $</span>
                            {this.props.priceCartPropoverItem}
                        </span>
                    </span>
                </div>
                <button><FontAwesomeIcon icon={['fas','times']} className="icon-close"/></button>
            </div>
        )
    }
}

export default CartPopoverItem

