import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container, heading, navLinks, navLinkItem, navLinkText,
  siteTitle
}
  from "./layout.module.css"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/portfolio">Portfolio</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About Hellgorger's Howlers</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{title}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout;
