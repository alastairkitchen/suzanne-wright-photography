import React from "react";
import Navigation from "./Navigation";

import "../scss/index.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Navigation />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
