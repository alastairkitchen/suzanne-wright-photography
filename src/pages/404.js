import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <div>
    <h1>404 NOT FOUND</h1>
    <p>
      Oops we couldn't find what your looking for, return to the &nbsp;
      <Link to="/">Homepage</Link>
    </p>
  </div>
);

export default NotFoundPage;
