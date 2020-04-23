import React from 'react';
import './sentence.scss';
import SentenceCard from '../sentence-card/sentence-card';

import sentenceImg1 from '../../img/sentence-1.png'
import sentenceImg2 from '../../img/sentence-2.png'
import sentenceImg3 from '../../img/sentence-3.png'
import { Link } from 'react-router-dom';


const description = [
  <>
    Push Notifications <br/>
    SQL Database <br/>
    Search & SEO Analytics <br/>
    24/7 Phone Support <br/>
    2 months technical support <br/>
    2+ profitable keyword <br/>
  </>
]

const Sentence = () => (
  <div className="sentence">
    <h2 className="title">
      <b className="extra-text">Afforadble Pricing and Packages</b>
      choose your best one
    </h2>
    <p className="description">
      Monotonectally grow strategic process improvements vis-a-vis integrated resources.
    </p>
    <div className="cards">
      <SentenceCard
        img={sentenceImg1}
        title="Basic"
        price="$29"
        description={description[0]}
      />
      <SentenceCard
        img={sentenceImg2}
        title="Standart"
        price="$149"
        description={description[0]}
      />
      <SentenceCard
        img={sentenceImg3}
        title="Unlimited"
        price="$39"
        description={description[0]}
      />
    </div>
    <p className="contact-us">If you need custom services or Need more? <Link to="/" className="link">Contact us</Link></p>
  </div>
)

export default Sentence;