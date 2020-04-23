import React from 'react';
import './advantages-card.scss';

const AdvantagesCard = ({title, img, description}) => (
  <div className="card">
    <img src={img} alt="img-card-1" className="card-img"/>
    <h4 className="card-title">{title}</h4>
    <p className="card-description">{description}</p>
  </div>
)

export default AdvantagesCard;