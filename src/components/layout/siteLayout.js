import React from "react";

import SiteHeader from "../header/header";
import Footer from "../footer/footer";

import "../../scss/index.scss";

const SiteLayout = (props) => (
  <React.Fragment>
    <SiteHeader hideNav={props.hideNav} />
    <main className="site-main">
      <div className="site-container">
        <div className="site-row">
          {props.title ? (
            <h1 className="content-h1">{props.title}</h1>
          ) : ''}
          {props.children}
        </div>
      </div>
    </main>
    {props.contentOuter}
    <Footer />
  </React.Fragment>
);

export default SiteLayout;
