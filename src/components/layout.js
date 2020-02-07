import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  return (
    <canvas>
      <Title />
    </canvas>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
