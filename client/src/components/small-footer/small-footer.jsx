import React from 'react';
import Logo from '../logo/logo';
import './small-footer.scss';

const SmallFooter = () => (
  <div className="small-footer">
    <div className="container">
      <Logo/>
      <p className="reserved-rights">All rights reserved by ThemeTags</p>
      <p className="copyrights">Copyrights © 2019.</p>
    </div>
  </div>
)

export default SmallFooter;