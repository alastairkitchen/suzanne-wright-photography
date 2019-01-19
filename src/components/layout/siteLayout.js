import React from "react";
import SiteHeader from "../header";
import Footer from "../footer";

import "../../scss/index.scss";

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <SiteHeader />
    <main className="site-main">{children}</main>
    <Footer />
  </React.Fragment>
);

export default TemplateWrapper;
