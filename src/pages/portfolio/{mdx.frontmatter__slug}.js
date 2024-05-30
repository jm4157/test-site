import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const PortfolioPage = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout title={data.mdx.frontmatter.title}>
      <p>Performed on {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
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
        hero_image_alt
        hero_image{
          childImageSharp{
            gatsbyImageData
          }
        }
      }
      id
    }
  }
`

export const Head = () => <Seo title="Portfolio Page" />

export default PortfolioPage
