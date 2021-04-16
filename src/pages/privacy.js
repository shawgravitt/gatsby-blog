import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PrivacyPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact Me" />
      <h1>Privacy</h1>
      <p>Your privacy matters to me and I keep this site simple.</p>
      <p>There are no cookies or analytics used on this site. Meaning, I have no idea you are here.</p>
      <p>If you choose to sign up for my email list, I make it super easy for you to unsubscribe. If you don't want to hear from me no hard feelings, <Link to="/contact">send me an email</Link> and I will take you off the list right away. </p>
    </Layout>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
