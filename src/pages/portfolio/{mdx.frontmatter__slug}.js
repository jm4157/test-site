import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const PortfolioPage = ({ data, children }) => {
  return (
    <Layout title={data.mdx.frontmatter.title}>
      {children}
    </Layout>
  )
}

export const Query = graphql`
  query($id: String){
    mdx(id: {eq: $id}){
      frontmatter{
        title
        date(formatString: "M/D YYYY")
      }
      id
      body
    }
  }
`

export const Head = () => <Seo title="Portfolio Page" />

export default PortfolioPage
