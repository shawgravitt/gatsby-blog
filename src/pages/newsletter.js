import * as React from "react"
import { graphql } from "gatsby"
import MailchimpForm from "../components/mailchimp"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsLetterPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Join My Newsletter" />
      <h1>Sign up for Updates</h1>
      <p>
        If you're into my stories, sign up for my email list below and I'll send you the new posts right when they come out. That’s the only thing I use the list for–and since my posting schedule isn’t exactly…regular…this is the best way to stay up-to-date with my posts.
      </p>
      <p>
        It’s a super unannoying list I promise. Never spam and unsubscribe whenever you want.
      </p>
      <MailchimpForm />
    </Layout>
  )
}

export default NewsLetterPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
