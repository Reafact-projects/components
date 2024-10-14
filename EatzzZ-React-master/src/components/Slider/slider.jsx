import React from 'react';
import './slider.css';
import { meals } from './meals';
import MenuTitle from '../Titles/Title';

function Slider() {
  const sliderStyles = {
    '--width': '150px',
    '--height': '250px',
    '--quantity': 12
  };

  return (<div className="container">
     <MenuTitle ph1="CLIENT" ph2="fAVORITE" />
    <main>
      <div className="slider" style={sliderStyles}>
        <div className="list">
          {meals.map((meal) => (
            <div className="item" style={{ '--position': meal.id }}>
              <img src={meal.image} alt="" className="img" />
              <p>{meal.name}</p>
            </div>

          ))}
        </div>
      </div>
    </main>
    </div>
  );
}

export default Slider;
