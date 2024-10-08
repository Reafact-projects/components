import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle";
import Hero from './components/Hero'
import Menu from "./components/newMenu/menu"
import Feature from './components/Feature';
import Footer from './components/Footer';
import Background from "./components/helpers/Background";
import darkGreyBg from "./images/dark-grey-bg.png"
import Slider from './components/Slider/slider.jsx';

function App() {
  return (
    <Router>  
      <GlobalStyle />
      <Hero />
      
      <Feature />
      <Background url={darkGreyBg}>
      <Menu/>
      <Slider/>
      </Background>
      
      <Footer />
    </Router>
  );
}

export default App;
