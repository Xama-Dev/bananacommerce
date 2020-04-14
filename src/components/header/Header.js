import React, { Component } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setSearchField } from './setSearchField'
import { mouseOverBtnCart } from './mouseOverBtnCart'

import CartPopoverItens from './headerComponents/cartPopoverItens/CartPopoverItens'


class Header extends Component {
    

    componentDidMount() {
        const selectElement = document.getElementById('selectSearchField')
        const selectLabel = document.getElementById('selectLabel')

        const selectLabelWidth = selectLabel.offsetWidth
        selectElement.style.width = `${selectLabelWidth}px`

        setSearchField()

        mouseOverBtnCart()
    }
    
    render() { 

        return (
            
            <header>
                <div className="container-header">
                    <div className="logo">
                        <a href="">
                            <p>banana<span>commerce</span></p>
                        </a>
                    </div>
                    <div className="container-search-field"> 
                        <div className="select-input-wrap">
                            <div className="select-input-pist">
                            <div className="select-container">
                                <div id="selectLabel" className="select-label">                                
                                    <span id="selectLabelSpan">All</span>
                                    <FontAwesomeIcon icon={['fas', 'chevron-down']}/>
                                </div>
                                <select name="" id="selectSearchField" className="">
                                    <option value="0" defaultValue="selected">All</option>
                                    <option className="level-0" value="babies-moms">Babies &amp; Moms</option>
                                    <option className="level-0" value="books-office">Books &amp; Office</option>
                                    <option className="level-0" value="cars-motocycles">Cars &amp; Motocycles</option>
                                    <option className="level-0" value="clothing-apparel">Clothing &amp; Apparel</option>
                                    <option className="level-1" value="accessories-clothing-apparel">&nbsp;&nbsp;&nbsp;Accessories</option>
                                    <option className="level-1" value="bags">&nbsp;&nbsp;&nbsp;Bags</option>
                                    <option className="level-1" value="kids-fashion">&nbsp;&nbsp;&nbsp;Kid’s Fashion</option>
                                    <option className="level-1" value="mens">&nbsp;&nbsp;&nbsp;Mens</option>
                                    <option className="level-1" value="shoes">&nbsp;&nbsp;&nbsp;Shoes</option>
                                    <option className="level-1" value="sunglasses">&nbsp;&nbsp;&nbsp;Sunglasses</option>
                                    <option className="level-1" value="womens">&nbsp;&nbsp;&nbsp;Womens</option>
                                    <option className="level-0" value="computers-technologies">Computers &amp; Technologies</option>
                                    <option className="level-1" value="desktop-pc">&nbsp;&nbsp;&nbsp;Desktop PC</option>
                                    <option className="level-1" value="laptop">&nbsp;&nbsp;&nbsp;Laptop</option>
                                    <option className="level-1" value="smartphones">&nbsp;&nbsp;&nbsp;Smartphones</option>
                                    <option className="level-0" value="consumer-electrics">Consumer Electrics</option>
                                    <option className="level-1" value="air-conditioners">&nbsp;&nbsp;&nbsp;Air Conditioners</option>
                                    <option className="level-2" value="accessories">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accessories</option>
                                    <option className="level-2" value="type-hanging-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Hanging Cell</option>
                                    <option className="level-2" value="type-hanging-wall">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Hanging Wall</option>
                                    <option className="level-1" value="audios-theaters">&nbsp;&nbsp;&nbsp;Audios &amp; Theaters</option>
                                    <option className="level-2" value="headphone">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Headphone</option>
                                    <option className="level-2" value="home-theater-system">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home Theater System</option>
                                    <option className="level-2" value="speakers">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Speakers</option>
                                    <option className="level-1" value="car-electronics">&nbsp;&nbsp;&nbsp;Car Electronics</option>
                                    <option className="level-2" value="audio-video">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audio &amp; Video</option>
                                    <option className="level-2" value="car-security">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Car Security</option>
                                    <option className="level-2" value="radar-detector">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Radar Detector</option>
                                    <option className="level-2" value="vehicle-gps">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vehicle GPS</option>
                                    <option className="level-1" value="office-electronics">&nbsp;&nbsp;&nbsp;Office Electronics</option>
                                    <option className="level-2" value="printers">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Printers</option>
                                    <option className="level-2" value="projectors">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projectors</option>
                                    <option className="level-2" value="scanners">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanners</option>
                                    <option className="level-2" value="store-business">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Store &amp; Business</option>
                                    <option className="level-1" value="refrigerators">&nbsp;&nbsp;&nbsp;Refrigerators</option>
                                    <option className="level-1" value="tv-televisions">&nbsp;&nbsp;&nbsp;TV Televisions</option>
                                    <option className="level-2" value="4k-ultra-hd-tvs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4K Ultra HD TVs</option>
                                    <option className="level-2" value="led-tvs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LED TVs</option>
                                    <option className="level-2" value="oled-tvs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OLED TVs</option>
                                    <option className="level-1" value="washing-machines">&nbsp;&nbsp;&nbsp;Washing Machines</option>
                                    <option className="level-2" value="type-drying-clothes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Drying Clothes</option>
                                    <option className="level-2" value="type-horizontal">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Horizontal</option>
                                    <option className="level-2" value="type-vertical">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Vertical</option>
                                    <option className="level-0" value="garden-kitchen">Garden &amp; Kitchen</option>
                                    <option className="level-1" value="cookware">&nbsp;&nbsp;&nbsp;Cookware</option>
                                    <option className="level-1" value="decoration">&nbsp;&nbsp;&nbsp;Decoration</option>
                                    <option className="level-1" value="furniture">&nbsp;&nbsp;&nbsp;Furniture</option>
                                    <option className="level-1" value="garden-tools">&nbsp;&nbsp;&nbsp;Garden Tools</option>
                                    <option className="level-1" value="home-improvement">&nbsp;&nbsp;&nbsp;Home Improvement</option>
                                    <option className="level-1" value="powers-and-hand-tools">&nbsp;&nbsp;&nbsp;Powers And Hand Tools</option>
                                    <option className="level-1" value="utensil-gadget">&nbsp;&nbsp;&nbsp;Utensil &amp; Gadget</option>
                                    <option className="level-0" value="health-beauty">Health &amp; Beauty</option>
                                    <option className="level-1" value="equipments">&nbsp;&nbsp;&nbsp;Equipments</option>
                                    <option className="level-1" value="hair-care">&nbsp;&nbsp;&nbsp;Hair Care</option>
                                    <option className="level-1" value="perfumer">&nbsp;&nbsp;&nbsp;Perfumer</option>
                                    <option className="level-1" value="skin-care">&nbsp;&nbsp;&nbsp;Skin Care</option>
                                    <option className="level-0" value="jewelry-watches">Jewelry &amp; Watches</option>
                                    <option className="level-1" value="gemstone-jewelry">&nbsp;&nbsp;&nbsp;Gemstone Jewelry</option>
                                    <option className="level-1" value="mens-watches">&nbsp;&nbsp;&nbsp;Men’s Watches</option>
                                    <option className="level-1" value="womens-watches">&nbsp;&nbsp;&nbsp;Women’s Watches</option>
                                    <option className="level-0" value="phones-accessories">Phones &amp; Accessories</option>
                                    <option className="level-1" value="iphone-8">&nbsp;&nbsp;&nbsp;Iphone 8</option>
                                    <option className="level-1" value="iphone-x">&nbsp;&nbsp;&nbsp;Iphone X</option>
                                    <option className="level-1" value="sam-sung-note-8">&nbsp;&nbsp;&nbsp;Sam Sung Note 8</option>
                                    <option className="level-1" value="sam-sung-s8">&nbsp;&nbsp;&nbsp;Sam Sung S8</option>
                                    <option className="level-0" value="sport-outdoor">Sport &amp; Outdoor</option>
                                    <option className="level-1" value="freezer-burn">&nbsp;&nbsp;&nbsp;Freezer Burn</option>
                                    <option className="level-1" value="fridge-cooler">&nbsp;&nbsp;&nbsp;Fridge Cooler</option>
                                    <option className="level-1" value="wine-cabinets">&nbsp;&nbsp;&nbsp;Wine Cabinets</option>
                                </select>
                            </div>
                            <input type="text" placeholder="I'm shopping for..."/>
                        </div>   
                        </div>
                        <button>Search</button>                     
                    </div>
                    <div className="icon-buttons-header">
                        <ul>
                            <li>
                                <a href="">
                                    <div className="btn-compare-container">
                                        <FontAwesomeIcon icon={['far', 'chart-bar']}/>
                                        <span>0</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="btn-favorite-container">
                                        <FontAwesomeIcon icon={['far','heart']}/>
                                        <span>0</span>
                                    </div>
                                </a>
                            </li>
                            <li id="link-btn-cart">
                                <a href="">
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
                                <a href="">
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