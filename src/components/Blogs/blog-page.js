import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Container from "./container";
import Layout from "../layout";
import PostHeader from "./header";

export const Blog = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Helmet
        title={frontmatter.title}
        meta={[{ name: "keywords", content: frontmatter.tags.join(",") }]}
      />
      <PostHeader date={frontmatter.date} title={frontmatter.title} />
      <Container>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "D MMMM YYYY")
        tags
        title
      }
    }
  }
`;

export default Blog;