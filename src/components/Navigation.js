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
      <NavLink to="/portraits">Portraits</NavLink>
      <NavLink to="/weddings">Weddings</NavLink>
      <NavLink to="/family">Family</NavLink>
      <NavLink to="/commercial">Commercial</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Contact</NavLink>
    </ol>
  </nav>
);

export default Navigation;
