import React from "react";
import { graphql } from 'gatsby';
import SiteLayout from "../components/layout/siteLayout";
import { extractFrontMatterData } from '../utils/graphqlUtil';
import ReactMarkdown from 'react-markdown'

export default class About extends React.Component {
  render() {

    const content = extractFrontMatterData(this.props.data.pageData);

    console.dir(content);

    return (
      <SiteLayout>
        <h1 className="content-h1">About</h1>
        <div className="about-grid">
          <article className="about-grid__image-col">
            {content.mainImage &&
              <img src={content.mainImage + '?nf_resize=smartcrop&w=590&h=800'} alt='about suzanne wright' />
            }
          </article>
          <div className="about-grid__text-col">
            <div className="about-grid__text-inner ">
              <ReactMarkdown source={content.mainContent} />
            </div>
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
          templateKey: { eq: "about-page" }
          title: { eq: "About" }
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
            mainImage
          }
        }
      }
    }
  }
`;