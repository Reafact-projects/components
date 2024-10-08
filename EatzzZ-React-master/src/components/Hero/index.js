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
            <Navbar />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>George's HotDogs Family-Owned & Operated Since 1948 </HeroH1>
                    <HeroB></HeroB>
                    <HeroBtn>Place Order!</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    )
}

export default Hero
