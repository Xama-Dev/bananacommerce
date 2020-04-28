import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header'
import Navbar from './components/Navbar/Navbar'
import FeaturedSection from './components/featuredSection/FeaturedSection' 
import DealsSection from './components/dealsSection/DealsSection'

import '@fortawesome/fontawesome-free/css/all.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import 
{
   faChartBar, 
   faHeart, 
   faUser, 
   faStar, 
   faGem, 
   faCreditCard,
   faComments
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
  faTag,
  faSearch,
  faPlus,
  faMinus,
  faRocket,
  faSyncAlt,
  faGift
} from '@fortawesome/free-solid-svg-icons'


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
  faTag,
  faSearch,
  faPlus,
  faMinus,
  faRocket,
  faSyncAlt,
  faCreditCard,
  faComments,
  faGift
  )

  
  export default class App extends Component {
    render() {
      return (     
        <div>
          <Header />
          <Navbar />
          <FeaturedSection />
          <DealsSection />
          <div className="white-space">
            
          </div>
        </div>       
      
    )
  }
}
