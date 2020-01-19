import React from "react";
import { Link } from "gatsby";

const Navigation = (props) => {

  return (
    <nav>
      <ol className="navigation">
        <li className="navigation__list">
          <Link onClick={() => props.closeMenu()} to="/">Home</Link>
        </li>
        <li className="navigation__list">
          <Link onClick={() => props.closeMenu()} to="/recent-work">Recent Work</Link>
        </li>
        <li className="navigation__list">
          <Link onClick={() => props.closeMenu()} to="/family">Family</Link>
        </li>
        <li className="navigation__list">
          <Link onClick={() => props.closeMenu()} to="/portraits">Portraits</Link>
        </li>
        <li className="navigation__list">
          <Link onClick={() => props.closeMenu()} to="/weddings">Weddings</Link>
        </li>
        <li className="navigation__list">
          <Link onClick={() => props.closeMenu()} to="/about">About</Link>
        </li>
        <li className="navigation__list">
          <Link onClick={() => props.closeMenu()} to="/contact">Contact</Link>
        </li>
      </ol>
    </nav>
  )
}

export default Navigation;
