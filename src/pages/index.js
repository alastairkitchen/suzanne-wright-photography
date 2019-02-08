import React from "react";
import SiteLayout from "../components/layout/siteLayout";

export default class IndexPage extends React.Component {
  render() {
    return (
      <SiteLayout>
        <div>Homepage</div>
        <img src="https://via.placeholder.com/468x200" />
        <img src="https://via.placeholder.com/468x200" />
        <img src="https://via.placeholder.com/468x200" />
      </SiteLayout>
    );
  }
}
