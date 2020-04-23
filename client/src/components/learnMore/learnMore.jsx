import React from 'react';
import './learnMore.scss';
import macbook from '../../img/macbook.png';

const LearnMore = () => (
  <div className="learn-more">
    <div className="learn-more-bg">
      <div className="left-side">
        <h2 className="title">
          Start Managing your apps business, more faster
        </h2>
        <p className="description">
          Objectively deliver professional value with diverse web-readiness.
          Collaboratively transition wireless customer service without <br/>goal-oriented catalysts for change.
          Collaboratively.
        </p>
        <button className="learn-more-btn">Learn more</button>
      </div>
      <div className="right-side">
        <img src={macbook} alt="macbook"/>
      </div>
    </div>
  </div>
)

export default LearnMore;