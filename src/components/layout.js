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
            <div className="header-image">
              <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/profile-pic.png"
                placeholder="tracedSVG"
                width={77}
                quality={95}
                alt="Shaw Gravitt"
              />
            </div>
          </Link>
          {header}
          <div className="menu-button-wrapper">
            <button id="menuButton" onClick={handleToggle}
              className={`menu-button ${!isActive ? "is-active" : ""}`} 
              type="button" aria-label="Menu" aria-controls="navigation" aria-expanded={`${!isActive ? "true" : "false"}`}>
                <span>Menu</span>
            </button>
          </div>
        </header>
        <div className={`main-nav ${!isActive ? "is-active" : ""}`}>
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
          <MailchimpForm />
        </div>
        <aside className="promo">
          <h2>Promo</h2>
        </aside>
        <main className="reading-column">{children}</main>

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
