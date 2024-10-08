import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./css.css"
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
} from './FooterElements';


const Footer = () => {
    return(
      
                    
                        

    <footer >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and navigation */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold  text-primary mb-4">George HotDogs</h2>
            <p className="text-gray-400">George's Hot Dogs is a well-known family-owned restaurant in Chicago, operating since 1948. Located in the Bucktown neighborhood, it has built a solid reputation for serving classic American and Greek street food.</p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partnerships</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Affiliates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Accessibility</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1 flex items-center justify-center md:justify-end">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
               
       
    )
}

export default Footer;