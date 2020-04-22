import React, { Component, Fragment } from 'react'
import './MenuDepartmentsMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { accordionSystem } from './accordionSystem'

class MenuDepartmentsMobile extends Component {

    componentDidMount() {
        accordionSystem()
    }

    render() {
        return (
            <Fragment>
                <div className="menudepartmentsmobile-container">
                    <div className="background-opacity">

                    </div>
                </div>
                <div className="menudepartmentsmobile">
                    <div className="header-menudepartmentsmobile">
                        <h1>Main Menu</h1>
                        <button id="btn-close-menudepartmentsmobile">
                            <FontAwesomeIcon icon={['fas', 'times']}
                                className="icon-close-menudepartmentsmobile" />
                        </button>
                    </div >
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['far', 'star']} />
                                <span>Hot Promotions</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <button className="btn-departement btn-accordion">
                            <FontAwesomeIcon icon={['fas', 'tv']} />
                            <span>Consumer Electrics</span>
                        </button>
                        <ul className="accordion-content">
                            <li>
                                <button className="btn-departement-submenu 
                            btn-accordion-submenu">
                                    Electronics
                            </button>
                                <ul className="accordion-content-submenu">
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Home Audios &amp; Theaters
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                TV &amp; Videos
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Camera, Photos &amp; Videos
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Cellphones &amp; Accessories
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Headphones
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Videogames
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Wireless Speakers
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Office Electronics
                                        </button>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button className="btn-departement-submenu 
                            btn-accordion-submenu">
                                    Acessories &amp; Parts
                            </button>
                                <ul className="accordion-content-submenu">
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Digital Cables
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Audio &amp; Video Cables
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Batteries
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Charger
                                        </button>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">
                                    <button className="btn-departement-submenu">
                                        DJI Phantom
                                </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'tshirt']} />
                                <span>Clothing &amp; Apparel</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'couch']} />
                                <span>Home, Garden &amp; Kitchen</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'heartbeat']} />
                                <span>Health &amp; Beauty</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['far', 'gem']} />
                                <span>Jewelry &amp; Watches</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <button className="btn-departement btn-accordion">
                            <FontAwesomeIcon icon={['fas', 'laptop']} />
                            <span>Computers &amp; Technologies</span>
                        </button>
                        <ul className="accordion-content">
                            <li>
                                <button className="btn-departement-submenu 
                            btn-accordion-submenu">
                                    Computers &amp; Tablets
                            </button>
                                <ul className="accordion-content-submenu">
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Laptop
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Monitors
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Networking
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Drive &amp; Storages
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Computer Components
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Security &amp; Protection
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Gaming Laptop
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Accessories
                                        </button>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">
                                    <button className="btn-departement-submenu">
                                        Headphones
                                </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'baby-carriage']} />
                                <span>Babies &amp; Moms</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'futbol']} />
                                <span>Sport &amp; Outdoor</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <button className="btn-departement btn-accordion">
                            <FontAwesomeIcon icon={['fas', 'mobile-alt']} />
                            <span>Phones &amp; Accessories</span>
                        </button>
                        <ul className="accordion-content">
                            <li>
                                <button className="btn-departement-submenu 
                            btn-accordion-submenu">
                                    Smart Phones
                            </button>
                                <ul className="accordion-content-submenu">
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                IOS Phones
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Android Phones
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Windowns Phone
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Other Smart Phones
                                        </button>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">
                                    <button className="btn-departement-submenu">
                                        Galaxy Note 4
                                </button>
                                </a>
                            </li>
                            <li>
                                <button className="btn-departement-submenu 
                            btn-accordion-submenu">
                                    Accessories
                            </button>
                                <ul className="accordion-content-submenu">
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Headphones
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Cases
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Lighting Cables
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Memory Cards
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Others
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Ear-Phones
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Phone Components
                                        </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <button className="btn-section">
                                                Accessories
                                        </button>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'book']} />
                                <span>Books &amp; Office</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'car']} />
                                <span>Cars &amp; Motocycles</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'tools']} />
                                <span>Home Improments</span>
                            </button>
                        </a>
                    </div>
                    <div className="wrap-btn-departement">
                        <a href="/">
                            <button className="btn-departement">
                                <FontAwesomeIcon icon={['fas', 'tag']} />
                                <span>Vouchers &amp; Services</span>
                            </button>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MenuDepartmentsMobile