import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>Ah damn you hit a link that goes no where. If you think there is a supposed to be a page here <Link to="/contact">contact me</Link> and let me know. I'll get you to where you need to go and get the problem fixed asap.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
