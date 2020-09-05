import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import { extractFrontMatterData } from "../utils/graphqlUtil";

export default class Contact extends React.Component {
  render() {

    const content = extractFrontMatterData(this.props.data.pageData);
    console.dir(content);

    return (
      <SiteLayout>
        <div className="contact">
          <h1 className="content-h1">Contact</h1>
          {content.mainContent}
          <p>Email: <a href="mailto:suzemailaddress@test.com">suzemailaddress@test.com</a></p>
          <p>Hello lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          <div className="table">
            <p className="table__header">Pricing:</p>
            <ul className="table__content">
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

export const query = graphql`
  query {
    pageData: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "contact-page" }
          title: { eq: "Contact" }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            description
            mainContent
            mainPricing
          }
        }
      }
    }
  }
`;
