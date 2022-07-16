import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css";

function Nav(props) {
  const pages = [{name: "Home", url : "/"},
    {name: "Projects", url : "/Projects"},
    {name: "Contact", url : "/Contact"},
    ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        {pages.map((page, index) => (
          <li className="nav-item" key={index}>
            <NavLink className="navbar-brand navbar-item" to={page.url}>{page.name}</NavLink>
          </li>
          ))}
      </ul>
    </nav>
  );
}

export default Nav;