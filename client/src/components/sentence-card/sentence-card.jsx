import React from 'react';
import './sentence-card.scss';

const SentenceCard = ({title, img, description, price}) => (
  <div className="sentence-card">
    <h3 className="card-title">{title}</h3>
    <img src={img} alt="sentence-img"/>
    <b className="card-price">{price}</b>
    <div className="card-line"></div>
    <p className="card-description">{description}</p>
    <button className="card-btn">Purchase now</button>
  </div>
)

export default SentenceCard;