import React, { Component } from 'react'
import './CartPopoverItens.css'

import CartPopoverItem from '../cartPopoverItem/CartPopoverItem'

class CartPopoverItens extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                {
                    _id: 1,
                    image: '/img/slick-deals-img1.jpg',
                    currency: '$',
                    price: 679.80,
                    discount: 0.16,
                    name: 'Korea Long Sofa Fabric In Blue Navy Color',
                    seller: 'Yong Shop'
                },
                {
                    _id: 2,
                    image: '/img/slick-deals-img2.jpg',
                    currency: '$',
                    price: 62.35,
                    discount: 0.07,
                    name: 'MVMTH Classical Leather Watch In Black',
                    seller: 'Yong Shop'
                }
            ],
            currency: '$',
            totalCart: 0,
            totalItens: 0
        }
    }

    componentDidMount() {

        //soma total da compra
        const totalCart = this.state.products.reduce((acumulator, product) => {
            return (

                acumulator + product.price - product.price * product.discount
            )

        }, 0)
        this.setState(() => ({
            totalCart: totalCart.toLocaleString(undefined, {
                minimumFractionDigits: 2, maximumFractionDigits: 2
            })
        }))

        //adiciona atributo de ultimo item do array        
        this.setState((state) => {
            state.products[this.state.products.length - 1].lastItem = true
        })

        //total de itens no carrinho
        this.setState(() => ({
            totalItens: this.state.products.length
        }))

    }

    render() {

        return (
            <div className="cart-popover-itens">
                {
                    //renderiza item do cart a cada loop
                    this.state.products.map(
                        product =>
                            <CartPopoverItem 
                                key={product._id} 
                                image={product.image}
                                currency={product.currency} 
                                price={product.price} 
                                discount={product.discount}
                                seller={product.seller}
                                lastItem={product.lastItem}
                                name={product.name}
                                
                            />
                    )
                }

                <div className="wrap-subtotal-cart-popover">
                    <div className="wrap-label-subtotal-cart-popover">
                        <span>
                            Subtotal:
                            <span className="label-total-cart-popover">
                                {this.state.currency}{this.state.totalCart}
                            </span>
                        </span>
                    </div>
                    <div className="wrap-btns-subtotal-cart">
                        <button >View cart</button>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartPopoverItens