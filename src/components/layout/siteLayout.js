import React from "react";

import SiteHeader from "../header/header";
import Footer from "../footer/footer";

import "../../scss/index.scss";

const SiteLayout = (props) => (
  <React.Fragment>
    <SiteHeader />
    <main className="site-main">
      <div className="site-container">
        {props.children}
      </div>
    </main>
    {props.contentOuter}
    <Footer />
  </React.Fragment>
);

export default SiteLayout;
