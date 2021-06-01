import React from 'react';
import {NavLink} from 'react-router-dom';

function TopMenu() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li>
           <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
          </li>

          <li>
            <NavLink to="/" activeClassName="active-link">Gaatjes</NavLink>
          </li>

          <li>
            <NavLink to="/" activeClassName="active-link">Afspraak maken</NavLink>
          </li>

          <li>
            <NavLink to="/" activeClassName="active-link">Tanden bleken</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopMenu;