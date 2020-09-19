import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import { extractFrontMatterData } from "../utils/graphqlUtil";
import ReactMarkdown from 'react-markdown';

export default class Contact extends React.Component {
  render() {

    const content = extractFrontMatterData(this.props.data.pageData);
    console.dir(content);

    return (
      <SiteLayout>
        <div className="contact">
          <h1 className="content-h1">Contact</h1>

          <ReactMarkdown source={content.mainContent} />
          <ReactMarkdown source={content.mainPricing} className="pricing-table" />
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
