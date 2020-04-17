import React, { Component } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MenuDepartaments from '../menuDepartaments/MenuDepartaments'
import { onMouseOverMenuNavigation } from './onMouseOverMenuNavigation'

class Navbar extends Component {   

    componentDidMount() {
        onMouseOverMenuNavigation()
    }

    render() {
        return (
            <nav>
                <div className="container-navbar">
                    <MenuDepartaments />
                    <div className="menu-navigation">
                        <ul>
                            <li id="li-home">
                                <a href="/">
                                    <span>Home</span>
                                </a>                                
                            </li>
                            <li id="li-shop">
                                <span>Shop</span>
                                <FontAwesomeIcon icon={['fas', 'chevron-down']}/>                                                                
                            </li>
                            <li id="li-pages">
                                <span>Pages</span>
                                <FontAwesomeIcon icon={['fas', 'chevron-down']}/>
                            </li>
                            <li id="li-blog">
                                <span>Blog</span>
                                <FontAwesomeIcon icon={['fas', 'chevron-down']}/>
                            </li>
                        </ul>
                        <div id="wrap-dropdown-li-shop">
                            <span></span>
                            <div className="container-dropdown ">                            
                                <ul>
                                    <span>Catalog Pages</span>
                                    <li>
                                        <a href="/">
                                            Shop default
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Categories
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Shop sidebar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Shop without banner
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Shop carrousel
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Category layout 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Products of category
                                        </a>
                                    </li>
                                </ul> 
                                <ul>
                                    <span>Products layout</span>
                                    <li>
                                        <a href="/">
                                            Default
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Extended
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Full content
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Boxed
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Sidbar
                                        </a>
                                    </li>                                    
                                </ul>
                                <ul>
                                    <span>Product Types</span>
                                    <li>
                                        <a href="/">
                                            Simple
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Color Swatches
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Image Swatches
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Coundown
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            360 Degree
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Multi-Vendor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Affiliate
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Item
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            On Sale
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Video Featured
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Groupped
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Out Of Stock
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <span>Woo Pages</span>
                                    <li>
                                        <a href="/">
                                            Shopping cart
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Checkout
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Wichlist
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Oder tracking
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            My account
                                        </a>
                                    </li>                                
                                </ul>                           
                            </div>
                        </div>
                        <div id="wrap-dropdown-li-pages">
                            <span></span>
                            <div className="container-dropdown ">
                                <ul>
                                    <span>Basic Pages</span>
                                    <li>
                                        <a href="/">
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Contact us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            FAQs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Cooming soon
                                        </a>
                                    </li>                                    
                                </ul> 
                                <ul>
                                    <span>Vendor Page</span>
                                    <li>
                                        <a href="/">
                                            Become a Vendor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Vendor store
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Store list
                                        </a>
                                    </li>                                                                        
                                </ul>                           
                            </div>
                        </div>
                        <div id="wrap-dropdown-li-blog">
                            <span></span>
                            <div className="container-dropdown ">
                                <ul>
                                    <span>Blog Layout</span>
                                    <li>
                                        <a href="/">
                                         Grid
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Listing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Small Thumb
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Left Sidebar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Right Sidebar
                                        </a>
                                    </li>                                    
                                </ul> 
                                <ul>
                                    <span>Single Blog</span>
                                    <li>
                                        <a href="/">
                                            Single Blog v1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Single Blog v2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Single Blog v3
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Single Blog v4
                                        </a>
                                    </li>                                                                       
                                </ul>                           
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar