import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { css, keyframes } from "@emotion/core"
import rhythm from "../utils/typography"

import Header from "./header"
import "./layout.css"

const colors = keyframes`
  0% { background: #f9e9d2 }
  25% { background: #e3b48c }
  50% { background: #966a57 }
  75% { background: #4b2828 }
  100% { bcakground: #f9e9d2 }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          css={css`
            width: 100vw;
            height: 100vh;
            animation: ${colors} 10s ease infinite;
          `}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout