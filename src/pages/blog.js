import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import Seo from "../components/seo";

const PortfolioPage = ({ data }) => {
  return (
    <Layout title="Portfolio">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

function nameCleanup(name) {
  const splitName = name.split("-")

  const cleanSplitName = splitName.map(word => (
    word.substr(0, 1).toUpperCase() + word.substr(1)
  ))

  return cleanSplitName.join(" ")
}

export const query = graphql`
  query{
    allFile{
      nodes{
        name
      }
    }
  }
`

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage;
