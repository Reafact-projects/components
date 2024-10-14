import React from 'react'
import hotDog from "../../images/hotDog.png"
import ContactForm from './ContactForm'
function Contact() {
  return (
    <div>      
        <img src={hotDog} alt="hotdog" width="100%"/>
        <ContactForm/>
    </div>
  )
}

export default Contact