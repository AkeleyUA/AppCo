import React from 'react';
import './stepper.scss';
import { NavLink } from 'react-router-dom';

const Stepper = ({ route, match }) => (
  <div className="stepper">
    {route.map((page, index) => {
      const nextArrow = () => (index !== route.length - 1 ? <p> > </p> : null)
      return (
        <div className="step" key={page.path}>
          <NavLink exact to={page.path} activeClassName="active">
            {page.name}
          </NavLink>
          {nextArrow()}
        </div>
      )
    })}
  </div>
)

export default Stepper;