import React from "react";

import SiteHeader from "../header";
import Footer from "../footer";

import "../../scss/index.scss";

const SiteLayout = (props) => (
  <React.Fragment>
    <SiteHeader />
    <main className="site-main">{props.children}</main>
    {props.modal}
    <Footer />
  </React.Fragment>
);

export default SiteLayout;
