import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent.js'
import SliderComponent from './SliderComponent/SliderComponent.js'
import ProductList from './ProductListing/ProductList.js'
import FooterComponent from './Footer/Footer.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <SliderComponent></SliderComponent>
        <ProductList></ProductList>
        <FooterComponent></FooterComponent>
      </div>

    );
  }
}

export default App;
