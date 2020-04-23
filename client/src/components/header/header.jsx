import React from 'react';
import Logo from '../logo/logo';
import './header.scss';
import mobile from '../../img/mobile.png';
import { NavLink  } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="head-side">
      <Logo/>
    </div>
    <div className="left-side">
      <h1 className="title"><b className="extra-word">Brainstorming</b> for desired perfect Usability</h1>
      <p className="description">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
      <NavLink to="/stats">
        <button className="header-btn btn-view">View Stats</button >
      </NavLink>
    </div>
    <div className="right-side">
      <img className="mobile" src={mobile} alt="mobile"/>
    </div>
  </div>
)

export default Header;