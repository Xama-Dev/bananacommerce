import React, { Component } from 'react'
import './CartPopoverItens.css'

import CartPopoverItem from '../cartPopoverItem/CartPopoverItem'

class CartPopoverItens extends Component {    

    render() {    
        const cartPopoverItens = [
            {
                imgCartPopoverItem: "bag-army.jpg",
                nameCartPropoverItem: "Unero Military Classical Backpack",
                nameSellerCartPropoverItem: "Yong Shop",
                priceCartPropoverItem: 35.78
            }
        ]
        

        return (            
            <div className="cart-popover-itens">
                <CartPopoverItem
                    imgCartPopoverItem = {require(`../../../../img/${cartPopoverItens[0].imgCartPopoverItem}`)}
                    nameCartPropoverItem= {cartPopoverItens[0].nameCartPropoverItem}
                    nameSellerCartPropoverItem= {cartPopoverItens[0].nameSellerCartPropoverItem}
                    priceCartPropoverItem={cartPopoverItens[0].priceCartPropoverItem}
                />
                <div className="wrap-subtotal-cart-popover">
                    <div className="wrap-label-subtotal-cart-popover">
                        <span>
                        Subtotal: <span className="label-total-cart-popover"> ${cartPopoverItens[0].priceCartPropoverItem}</span> 
                        </span>                        
                    </div>
                    <div className="wrap-btns-subtotal-cart">
                        <button>View cart</button>
                        <button>Checkout</button>
                    </div>
                </div>            
            </div>
        )
    }
}

export default CartPopoverItens