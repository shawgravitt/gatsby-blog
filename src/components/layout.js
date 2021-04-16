import React, { useState } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MailchimpForm from "../components/mailchimp"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  
    
  

  return (
    <div className="wrapper"  data-is-root-path={isRootPath}>
      <div className="body">
        <header className="global-header">
        <Link to="/">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/profile-pic.png"
            placeholder="tracedSVG"
            width={50}
            height={50}
            quality={95}
            alt="Shaw Gravitt"
          />
        </Link>
        {header}
        <button id="menuButton" onClick={handleToggle}
          className={`hamburger hamburger--minus ${!isActive ? "is-active" : ""}`} 
          type="button" aria-label="Menu" aria-controls="navigation" aria-expanded={`${!isActive ? "true" : "false"}`}>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
        </button>
      </header>
        <div className={`main-nav ${!isActive ? "is-active" : ""}`}>
          <MailchimpForm />
          <nav>
            <ul>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/books-i-love">Books I Love</Link>
              </li>
            </ul>
          </nav>
        </div>
        <main className="reading-column">{children}</main>
        <aside className="promo"></aside>
      
        <footer className="main-footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
