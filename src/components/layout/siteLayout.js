import React from "react";
import { connect } from "react-redux";

import SiteHeader from "../header";
import Footer from "../footer";

import "../../scss/index.scss";

const mapStateToProps = state => {
  return { counter: state.counter };
};

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) };
};

const SiteLayout = ({ children, counter, increment }) => (
  <React.Fragment>
    <SiteHeader />
    <main className="site-main">{children}</main>
    <Footer />
    <div style={{ position: "relative", top: "400px" }}>
      <p>Count: {counter.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  </React.Fragment>
);

const VisibleSiteLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteLayout);

export default VisibleSiteLayout;
