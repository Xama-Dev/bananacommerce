import React, { Component } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import enFlag from '../../img/en.png'
import brFlag from '../../img/br.png'
import frFlag from '../../img/fr.png'
import geFlag from '../../img/de.png'

import MenuDepartaments from '../menuDepartaments/MenuDepartaments'
import { onMouseOverMenuNavigation } from './onMouseOverMenuNavigation'
import { onMouseOverMenuAside, onMouseOvermenuAside } from './onMouseOverMenuAside'
import NavbarMobile from './navbarComponents/navbarMobile/NavbarMobile'

class Navbar extends Component {   

    componentDidMount() {
        onMouseOverMenuNavigation()
        onMouseOvermenuAside()
    }

    render() {
        return (
            <nav>
                <div className="container-navbar">
                    <MenuDepartaments />
                    <div className="wrap-menunavigation-menuaside">
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
                        <div className="menuaside-navbar">
                            <div className="item-menuaside-navbar 
                            separator-item-menuaside-navbar">
                                <div className="itemcontainer-menuaside-navbar">
                                    <a href="/">
                                        <span>Become a Seller</span>
                                    </a>
                                </div>
                            </div>
                            <div className="item-menuaside-navbar 
                            separator-item-menuaside-navbar">
                                <div className="itemcontainer-menuaside-navbar">
                                    <a href="/">
                                        <span>Track Your order</span>
                                    </a>
                                </div>
                            </div>
                            <div className="item-menuaside-navbar
                            separator-item-menuaside-navbar">
                                <div className="itemcontainer-menuaside-navbar">
                                    <span id="trigger-currence-options">
                                        US Dolar
                                        <FontAwesomeIcon icon={['fas', 'chevron-down']} />                                    
                                    </span>
                                </div>
                            </div>
                            <div id="wrap-currence-options">
                                <div className="container-dropdown-currence">
                                    <span></span>
                                    <ul>
                                        <li>US Dollar</li>
                                        <li>Brasil Real</li>
                                        <li>European Euro</li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="item-menuaside-navbar">
                                <div className="itemcontainer-menuaside-navbar 
                                especial-padding">
                                    <span id="trigger-language-options">
                                        <img src={enFlag} alt="england flag"/>
                                        English
                                        <FontAwesomeIcon icon={['fas', 'chevron-down']} />    
                                    </span>
                                    
                                </div>
                            </div>
                            <div id="wrap-language-options">
                                <div className="container-dropdown-language">
                                    <span></span>
                                    <ul>
                                        <li>
                                            <img src={brFlag} alt="Brazil Flag" />
                                            Portuguese
                                        </li>
                                        <li>
                                            <img src={frFlag} alt="France Flag" />                                            
                                            French
                                        </li>
                                        <li>
                                            <img src={geFlag} alt="German Flag" />                                            
                                            German
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <NavbarMobile /> 
                </div>
            </nav>
        )
    }
}

export default Navbar