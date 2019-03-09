import React from "react";
import { Link } from "gatsby";

const NavLink = props => (
  <li className="navigation__list">
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Navigation = () => (
  <nav>
    <ol className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/family">Family</NavLink>
      <NavLink to="/portraits">Portraits</NavLink>
      <NavLink to="/weddings">Weddings</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ol>
  </nav>
);

export default Navigation;
