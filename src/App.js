import React, { Component } from 'react'
import HeaderComp from './components/HeaderComp'
import PricelistComp from './components/PricelistComp'
import SliderComp from './components/SliderComp'
import StepsComp from './components/StepsComp'
import './App.css'
import BuyComp from './components/BuyComp'
import FooterComp from './components/FooterComp'
// import Maintenance from './maintenance/Maintenance' // for maintenance

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderComp />
        <SliderComp />
        <StepsComp />
        <PricelistComp />
        <BuyComp />
        <FooterComp />
        
        {/* <Maintenance /> */}
      </div>
    )
  }
}
