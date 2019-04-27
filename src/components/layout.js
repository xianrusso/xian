import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { css, keyframes } from "@emotion/core"
import rhythm from "../utils/typography"

import Header from "./header"
import "./layout.css"

const colors = keyframes`
  0% { background: #7baea9 }
  20% { background: #6fa597}
  40% { background: #619a87 }
  60% { background: #478868 }
  80% { background: #387f55 }
  100% { bcakground: #7baea9 }
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
            width: 100%;
            height: 100vh;
            background: #7baea9;
            animation: ${colors} 10s linear infinite;
          `}
        >
          
          
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout