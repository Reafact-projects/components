import React from 'react'
import { 
    HeroContainer, 
    HeroContent, 
    HeroH1, 
    HeroBtn 
} from './HeroElements'
// import Navbar from '../Navbar'

const Hero = () => {
    return (<div>
            
        <HeroContainer>
            <HeroContent>
                    <HeroBtn> Order Now </HeroBtn>
                    <HeroH1> Family-Owned & Operated Since 1948 </HeroH1>
            </HeroContent>
        </HeroContainer>
        </div>
    )
}

export default Hero
