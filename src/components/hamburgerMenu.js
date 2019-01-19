import React from "react";

const HamburgerMenu = props => (
  <div onClick={props.openMenu} className="hamburger-wrapper">
    <div className="hamburger-menu" />
  </div>
);

export default HamburgerMenu;
