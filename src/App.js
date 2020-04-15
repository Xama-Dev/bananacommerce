import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import 
{
   faChartBar, 
   faHeart, 
   faUser, 
   faStar, 
   faGem 
} from '@fortawesome/free-regular-svg-icons'
import 
{
  faShoppingBag, 
  faChevronDown, 
  faTimes, 
  faBars,
  faTv,
  faTshirt,
  faCouch,
  faHeartbeat,
  faLaptop,
  faBabyCarriage,
  faFutbol,
  faMobileAlt,
  faBook,
  faCar,
  faTools,
  faTag
} from '@fortawesome/free-solid-svg-icons'

import Header from './components/header/Header'
import Navbar from './components/Navbar/Navbar'

library.add(   
  faChartBar, 
  faHeart, 
  faShoppingBag, 
  faChevronDown, 
  faUser,
  faTimes,
  faBars,
  faStar,
  faTv,
  faTshirt,
  faCouch,
  faHeartbeat,
  faGem,
  faLaptop,
  faBabyCarriage,
  faFutbol,
  faMobileAlt,
  faBook,
  faCar,
  faTools,
  faTag
  )

export default class App extends Component {
render() {
    return (     
      <div>
        <Header />
        <Navbar />
      </div>       
      
    )
  }
}
