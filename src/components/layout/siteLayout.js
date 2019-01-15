import React from "react";
import SiteHeader from "../header";
import Footer from "../footer";

import "../../scss/index.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <SiteHeader />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
