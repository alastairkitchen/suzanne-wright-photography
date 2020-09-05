import React from "react";
import SiteLayout from "../components/layout/siteLayout";

export default class Contact extends React.Component {
  render() {
    return (
      <SiteLayout>
        <div class="contact">
          <h1 class="content-h1">Contact</h1>
          <p>Email: <a href="mailto:suzemailaddress@test.com">suzemailaddress@test.com</a></p>
          <p>Hello lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          <div class="table">
            <p class="table__header">Pricing:</p>
            <ul class="table__content">
              <li>package 1 £xxx</li>
              <li>package 2 £xxx</li>
              <li>package 3 £xxx</li>
              <li>package 4 £xxx</li>
            </ul>
          </div>
        </div>
      </SiteLayout>
    );
  }
}
