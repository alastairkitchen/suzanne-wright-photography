import React from "react";
import { Link } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";

const NotFoundPage = () => (
  <SiteLayout hideNav={true}>
    <div className="page-404">
      <h1>404 NOT FOUND</h1>
      <p>
        Oops we couldn't find what your looking for, return to the &nbsp;
        <Link to="/">Homepage</Link>
      </p>
    </div>
  </SiteLayout>
);

export default NotFoundPage;
