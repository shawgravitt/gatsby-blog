import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Me" />
      <h1>About Me!</h1>
      <p>
        Hi! I'm Shaw. Writing about myself is turingout to be very difficult so this page will remain a work in progress for the foreseeable future.
      </p>
      
        <h2 style={{marginBottom: `0`}}>The Highlights:</h2>
        <ul>
          <li>I live in Asheville, NC with my wife, son, and beagle.</li>
          <li>I grew up an hour north of Atlanta, GA, in a town called Cumming.</li>
          <li>I write for fun.</li>
          <li>Drinking beer at a local brewery on a Saturday afternoon a perfect way to spend hours.</li>
          <li>I build <a href="https://www.shopify.com/?ref=shaw-gravitt" target="_blank" rel="noreferrer">Shopify websites</a> to pay the bills</li>
          <li>I'm pretty shy and quiet until you get to know me, and then I still don't always have a ton to say.</li>
          <li>Breaking my neck in 2013 was one of the best things to ever happen to me.</li>
        </ul>

        <h2>Now</h2>
        
        <p><small>This is my <a href="https://sive.rs/now" target="_blank" rel="noopener noreferrer">now page</a> (section) and an idea from <a href="https://sive.rs/" target="_blank" rel="noopener noreferrer">Derek Sivers</a></small></p>

        <p>It's spring/summer in the mountains and its freaking awesome.</p>

        <p>I am currently working through editing a novel that was expanded from a story I wrote called <Link to="/crimes-against-the-human-race">Crimes Against the Human Race</Link> and another called <Link to="/dont-drink-the-water">Don't Drink the Water</Link>.</p>

        <p>My kiddo is a total sponge and it is awesome to watch him grow.</p>

    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
