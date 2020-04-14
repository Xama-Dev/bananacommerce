import React, { Component } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartBar, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faSpinner, faShoppingBag, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'

import Header from './components/header/Header'

library.add(
  faSpinner, 
  faChartBar, 
  faHeart, 
  faShoppingBag, 
  faChevronDown, 
  faUser,
  faTimes
  )

export default class App extends Component {
render() {
    return (     
      <div>
        <Header />
        <div className="spinner-container">
          {/* <FontAwesomeIcon icon="spinner" className="spinner fa-pulse"/> */}
        </div>
      </div>       
      
    )
  }
}
