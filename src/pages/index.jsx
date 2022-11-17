import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
// import SectionBlog from '../components/section-blog';
import SectionProjects from '../components/section-projects';
import SectionResearch from '../components/section-research';
import SectionAwards from '../components/section-awards';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const researches = get(data, 'site.siteMetadata.researches', false);
  const posts = data.allMarkdownRemark.edges;
  const projects = get(data, 'site.siteMetadata.projects', false);
  const awards = get(data, 'site.siteMetadata.awards', false);
  const noBlog = !posts || !posts.length;
  console.log(researches,  researches.length )
  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {researches && researches.length && (
        <SectionResearch researches={researches} />
      )}
      {/* {!noBlog && <SectionBlog posts={posts} />} */}
      {projects && projects.length && (
        <SectionProjects projects={projects} />
      )}
      {awards && awards.length && <SectionAwards awards={awards} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        projects {
          name
          description
          link
        }
        researches {
          name
          description
          link
        }
        awards {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
