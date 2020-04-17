import React, { Component } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mouseOverBtnCart } from './mouseOverBtnCart'

import SearchField from '../searchField/SearchField'
import CartPopoverItens from './headerComponents/cartPopoverItens/CartPopoverItens'


class Header extends Component {    

    componentDidMount() {      

        mouseOverBtnCart()
    }
    
    render() { 

        return (
            
            <header>
                <div className="container-header">
                    <div className="logo">
                        <a href="/">
                            <p className="logo-text-banana-commerce" >banana<span>commerce</span></p>
                            <p className="icon-banana-commerce">b</p>
                        </a>
                    </div>
                    <SearchField />
                    <div className="icon-buttons-header">
                        <ul>
                            <li>
                                <a href="/">
                                    <div className="btn-compare-container">
                                        <FontAwesomeIcon icon={['far', 'chart-bar']}/>
                                        <span>0</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <div className="btn-favorite-container">
                                        <FontAwesomeIcon icon={['far','heart']}/>
                                        <span>0</span>
                                    </div>
                                </a>
                            </li>
                            <li id="link-btn-cart">
                                <a href="/">
                                    <div className="btn-cart-container">
                                        <FontAwesomeIcon icon={['fas','shopping-bag']}/>
                                        <span>0</span>                                
                                    </div>
                                </a>
                                <ul className="ul-popover-cart">
                                    <li>
                                        <div id="cart-popover" className="cart-popover cart-popover-disable">
                                            <span></span>
                                            <p className="no-products-label">No products in the cart.</p>
                                            <CartPopoverItens />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">
                                    <div className="register-login">
                                        <FontAwesomeIcon icon={['far', 'user']}/>
                                        <p>Log in <br/> Register</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header