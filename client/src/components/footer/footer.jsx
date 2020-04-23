import React from 'react';
import Logo from '../logo/logo';
import './footer.scss';

const HomePageFooter = () => (
  <div className="home-page-footer">
    <div className="wrapper">
      <form className="subscribe">
        <input className="input-email" type="email" placeholder="enter your email" required/>
        <input className="input-button" type="submit" value="subscribe" />
      </form>
      <div className="footer-info">
        <Logo/>
        <p className="reserved-rights">All rights reserved by ThemeTags</p>
        <p className="copyrights">Copyrights © 2019.</p>
      </div>
    </div>
  </div>
)

export default HomePageFooter;