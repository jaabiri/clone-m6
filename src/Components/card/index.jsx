import React from 'react';
import CardWrapper from './CardWrapper.js'

const Card = (props) => {
  return (
    <CardWrapper isLarge={props.isLarge} page={props.page}> 
      <div className="card__tile card__tile--large">
          <div className="tile__image">
            <img className="tile__thumb"
              alt="À l'état sauvage en replay"
              src={props.src} />
          </div>
          <div className="tile__label">
            <div className="tile__title">À l'état sauvage</div>
            <div className="tile__subtitle"><span>8 émissions</span>
            </div>
          </div>
      </div>
    </CardWrapper>
  );
};

export default Card;


