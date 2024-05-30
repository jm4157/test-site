import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout title="Hellgorger's Howlers">
      <p1>
        Many people have been asking me "Ankhes, what was it like
        playing for Hellgorger's Howlers?" Well dear fans, that's what
        this page is meant to explain.
      </p1>
    </Layout>
  )
}

export const Head = () => <Seo title="Hellgorger's Howlers" />

export default AboutPage
