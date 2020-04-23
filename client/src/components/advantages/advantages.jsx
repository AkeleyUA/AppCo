import React from 'react';
import './advantages.scss';
import imgCard1 from '../../img/card-1.png'
import imgCard2 from '../../img/card-2.png'
import imgCard3 from '../../img/card-3.png'
import AdvantagesCard from '../advantages-card/advantages-card';

const Advantages = () => (
  <div className="advantages">
    <h3 className="title">Why <b>small business owners love</b> AppCo?</h3>
    <p className="description">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
    <div className="cards">
      <AdvantagesCard 
        img={imgCard1}
        title="Clean Design"
        description="Increase sales by showing true dynamics of your website."
      />
      <AdvantagesCard 
        img={imgCard2}
        title="Secure Data"
        description="Build your online store’s trust using Social Proof & Urgency."
      />
      <AdvantagesCard 
        img={imgCard3}
        title="Retina Ready"
        description="Realize importance of social proof in customer’s purchase decision."
      />
    </div>
  </div>
)

export default Advantages;