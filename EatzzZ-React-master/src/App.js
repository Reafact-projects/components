import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle";
import Hero from './components/Hero'
import Products from './components/Products'
import Menu from "./components/newMenu/menu"
import { productData, productDataTwo } from './components/Products/data'
import Feature from './components/Feature';
import Footer from './components/Footer';
import Background from "./components/helpers/Background";
import darkGreyBg from "./images/dark-grey-bg.png"
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      {/* <Products heading='Choose your favorite' data={productData} /> */}
      <Background url={darkGreyBg}>
      <Menu/>
      </Background>
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
