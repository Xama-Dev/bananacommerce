import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/js/all'


export default class App extends Component {
  render() {
    return (     
      <div>
        <Header />
      </div>       
      
    )
  }
}
