import React, { Component } from 'react'
import './MenuDepartaments.css'

import { menuDepartmentsActive } from './menuDepartamentsActive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MenuDepartaments extends Component {
    componentDidMount() {
        menuDepartmentsActive()
    }
    
    render() {
        return(
            <div className="menu-departaments">
                <div className="container-wrap-menu-departments">
                    <div id="wrap-menu-departments" className="wrap-btn-menu-departaments">
                        <FontAwesomeIcon icon={['fas', 'bars']} />
                        <span className="label-menu-departaments">Shop By Department</span>
                    </div>
                </div>
                <div className="container-menu-departments-options">
                    <ul>
                        <a href="/">
                            <li>
                                <FontAwesomeIcon icon={['far','star']}/>
                                <span> Hot Promotions</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <FontAwesomeIcon icon={['fas','tv']}/>
                                <span> Consumer Electrics</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','tshirt']}/>
                            <span>  Clothing &amp; Apparel</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','couch']}/>
                            <span> Home, Garden &amp; Kitchen</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','heartbeat']}/>
                            <span> Health &amp; Beauty</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['far','gem']}/>
                            <span> Jewelry &amp; Watches</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','laptop']}/>
                            <span> Computers &amp; Technologies</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','baby-carriage']}/>
                            <span> Babies &amp; Moms</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','futbol']}/>
                            <span> Sport &amp; Outdoor</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','mobile-alt']}/>
                            <span> Phones &amp; Accessories</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','book']}/>
                            <span> Books &amp; Office</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','car']}/>
                            <span> Cars &amp; Motocycles</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','tools']}/>
                            <span> Home Improments</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                            <FontAwesomeIcon icon={['fas','tag']}/>
                            <span> Vouchers &amp; Services</span>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuDepartaments