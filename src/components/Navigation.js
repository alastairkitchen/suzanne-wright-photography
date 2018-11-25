import React from "react";
import { Link } from "gatsby";

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gallery1">Gallery 1</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
