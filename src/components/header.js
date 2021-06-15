import * as React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import * as headerStyle from './header.module.css'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
  `)
  return (
  <header className={headerStyle.header}>
    <h1>{data.site.siteMetadata.title}</h1>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
