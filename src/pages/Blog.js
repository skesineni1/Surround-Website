import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import BlogSnippet from "../components/Blogs/blogSnippet";


const BlogPage = ({ data }) => (

    // const {
    //     allMarkdownRemark: { edges: posts }
    //   } = data;

    <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        {/* <BackgroundSection
            img={data.img.childImageSharp.fluid} >

            

        </BackgroundSection> */}
        {/* This is a code to display all the blog section of the page in the public domain. */}
        {data.allMarkdownRemark.edges.map(post => (
                <BlogSnippet
                  date={post.node.frontmatter.date}
                  excerpt={post.node.excerpt}
                  key={post.node.frontmatter.path}
                  path={post.node.frontmatter.path}
                  summary={post.node.frontmatter.summary}
                  tags={post.node.frontmatter.tags}
                  title={post.node.frontmatter.title}
                  author={post.node.frontmatter.author}
                />
              ))}


    </Layout>);

export const pageQuery = graphql`{
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt(pruneLength: 300)
        frontmatter {
          date(formatString: "D MMMM YYYY")
          path
          tags
          summary
          title
          author
        }
    }
    }
}
}`;


export default BlogPage;
