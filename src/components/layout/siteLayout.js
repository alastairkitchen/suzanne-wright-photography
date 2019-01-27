import React from "react";

import SiteHeader from "../header";
import Footer from "../footer";

import "../../scss/index.scss";

const SiteLayout = ({ children, counter, increment }) => (
  <React.Fragment>
    <SiteHeader />
    <main className="site-main">{children}</main>
    <Footer />
  </React.Fragment>
);

export default SiteLayout;
