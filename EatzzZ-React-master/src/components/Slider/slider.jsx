import React from 'react';
import './slider.css';
import { meals } from './meals';

function Slider() {
  const sliderStyles = {
    '--width': '150px',
    '--height': '250px',
    '--quantity': 12
  };

  return (
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
  );
}

export default Slider;
