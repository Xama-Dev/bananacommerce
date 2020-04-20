import React, { Component } from 'react'
import './NavbarMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavbarMobile extends Component {
    render() {
        return(
            <div className="wrap-menunavgation-mobile">
                <FontAwesomeIcon icon={['fas', 'bars']}/>
                <div className="search-field-mobile">
                    <input type="text" placeholder="I'm shopping for..."/>
                    <button>
                        <FontAwesomeIcon icon={['fas','search']}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default NavbarMobile