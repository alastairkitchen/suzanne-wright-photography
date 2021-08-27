import React from "react";
import { Link } from 'gatsby';
import SiteHeader from "../header/header";
import Footer from "../footer/footer";
import ChevronLeftIcon from "../../assets/svg/chevron-left.inline.svg";

import "../../scss/index.scss";

const SiteLayout = (props) => (
  <React.Fragment>
    <SiteHeader hideNav={props.hideNav} />
    <main className="site-main">
      <div className="site-container">
        <div className="site-row">
          {props.backLink ? (
            <Link className='back-link' to={props.backLink}><ChevronLeftIcon /> Back</Link>
          ) : ''}
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
