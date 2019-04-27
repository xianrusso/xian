import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { css, jsx, keyframes } from "@emotion/core"
import rhythm from "../utils/typography"
import { GoMarkGithub } from "react-icons/go"
import { IoLogoInstagram } from "react-icons/io"

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
            margin: 0 auto;
            width: 100%;
            height: 100vh;
            background: #7baea9;
            animation: ${colors} 10s linear infinite;
            display: flex;
            
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              height: auto;
              width: 70%;
            `}
          >
            <h1>Christian Russo</h1>
            <p>Hello!  I'm a full-stack develop and writer based in Baltimore.</p>
            <ul
              css={css`
                list-style: none;
                display: flex;
                margin: 0 auto;
              `}
            >
              <li
                css={css`
                  padding-right: 20px;
                `}
              >  
                <a
                  href="https://github.com/xianrusso"
                  css={css`
                    text-decoration: none;
                    color: black;
                    display: flex;
                    flex-direction: row;
                    &:hover {
                      color: red;
                    }
                  `}  
                >
                  <GoMarkGithub></GoMarkGithub>
                  <p
                    css={css`
                      padding-left: 8px;
                    `}
                  >
                    xianrusso
                  </p>
                </a>
              </li>
              <li
                css={css`
                  padding-right: 20px;
                `}
              >  
                <a
                  href="https://www.instagram.com/fotoxian/?hl=en"  
                  css={css`
                    text-decoration: none;
                    color: black;
                    display: flex;
                    flex-direction: row;
                  `}  
                >
                  <IoLogoInstagram></IoLogoInstagram>
                  <p
                    css={css`
                      padding-left: 8px;
                    `}
                  >
                    fotoxian
                  </p>
                </a>
              </li>
            </ul>
            
            {children}
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