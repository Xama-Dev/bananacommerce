import React, { Component } from 'react'
import './CartPopoverItem.css'

// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CartPopoverItem extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div className="cart-item" style={this.props.lastItem ?
                { borderBottom: 'none' } : {}}>
                <a href="/">
                    <img src={this.props.image} alt="" />
                </a>
                <div className="product-cart-info">
                    <a href="/">
                        <p className="product-cart-name">{this.props.name}</p>
                    </a>
                    <p className="seller-cart-name">Sold By: <span>{this.props.seller}</span></p>
                    <span className="price-cart-name">
                        1 ×
                        <span>
                            <span> {this.props.currency}</span>
                            {(this.props.price - this.props.price * this.props.discount).toLocaleString(undefined, {
                                minimumFractionDigits: 2, maximumFractionDigits: 2
                            })}
                        </span>
                    </span>
                </div>
                <button>
                    <FontAwesomeIcon icon={['fas', 'times']} className="icon-close" />
                </button>
            </div>
        )
    }

}

// const CartPopoverItem = ({ product }) => {

//     let {
//         image, currency, price,
//         discount, name, seller, lastItem
//     } = product

//     return (

//         <div className="cart-item" style={lastItem === true ?
//             { borderBottom: 'none' } : {}}>
//             <a href="/">
//                 <img src={image} alt="" />
//             </a>
//             <div className="product-cart-info">
//                 <a href="/">
//                     <p className="product-cart-name">{name}</p>
//                 </a>
//                 <p className="seller-cart-name">Sold By: <span>{seller}</span></p>
//                 <span className="price-cart-name">
//                     1 ×
//                     <span>
//                         <span> {currency}</span>
//                         {(price - price * discount).toLocaleString(undefined, {
//                             minimumFractionDigits: 2, maximumFractionDigits: 2
//                         })}
//                     </span>
//                 </span>
//             </div>
//             <button>
//                 <FontAwesomeIcon icon={['fas', 'times']} className="icon-close" />
//             </button>
//         </div>
//     )

// }

// CartPopoverItem.propTypes = {

//     product: PropTypes.object.isRequired
// }

export default CartPopoverItem

