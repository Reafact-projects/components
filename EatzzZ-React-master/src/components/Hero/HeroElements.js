import styled from 'styled-components'
import gerorge2 from "../../images/gerorge2.jpg"

export const HeroContainer = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)), url(${gerorge2});
    height: 100vh;
    background-position: center;
    background-size: cover; 
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end; 
    align-items: center;      
    height: 100vh; 
    margin-bottom: 40px;     
`
export const HeroItems = styled.div`
    height: 100vh;
    max-height: 100%;
    width: 650px;
    padding: 0 2rem;
    color: #fff;
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 1vw, 3rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #fff
    letter-spacing: 3px;
    font-family: 'Poppins', cursive;
    color   : #fff;


`


export const HeroBtn = styled.button`
    font-family: 'Poppins', cursive;
    font-size: 1.4rem;
    padding: 1rem 0.5rem;
    border: none;
    border-radius: 1.5rem;
    background: #FF0000;
    color: #fff;
    transition: 0.2s ease-out;
    width: 200px;
    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`