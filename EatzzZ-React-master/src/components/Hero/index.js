import React from 'react'
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroB, 
    HeroBtn 
} from './HeroElements'


const Hero = () => {


  
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>George HotDogs</HeroH1>
                    <HeroB>Family-Owned & Operated Since 1948</HeroB>
                    <HeroBtn>Place Order!</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    )
}

export default Hero
