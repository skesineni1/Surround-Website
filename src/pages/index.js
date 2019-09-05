import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info.js";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <BackgroundSection
        img={data.img.childImageSharp.fluid}
        
        styleClass="default-background"
      />
      <Info />
      
    
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "Banner.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
    `;


export default IndexPage;
