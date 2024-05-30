import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import Seo from "../components/seo";

const PortfolioPage = ({ data }) => {
  return (
    <Layout title="Portfolio">

      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Performed on {node.frontmatter.date}</p>
            <p>{node.body}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query{
    allMdx(sort: {frontmatter: {date: DESC} }){ 
      nodes{
        frontmatter{
          title
          date(formatString: "M/D, YYYY")
        }
        id
        body
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage;
