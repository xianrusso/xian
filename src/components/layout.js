import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { css, jsx, keyframes } from "@emotion/core"
import rhythm from "../utils/typography"
import { GoMarkGithub } from "react-icons/go"
import { IoLogoInstagram, IoIosMail, IoIosAttach } from "react-icons/io"

import "./layout.css"

const colors = keyframes`
  0% { background: #7baea9 }
  20% { background: #6fa597}
  40% { background: #619a87 }
  60% { background: #478868 }
  80% { background: #387f55 }
  100% { bcakground: #7baea9 }
`

const gradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const Button = () => {
  return (
    <a
      css={css`
        display: flex;
        border-radius: 8%;
        justify-content: center;
        background: transparent;
        border: 1px solid white;
        text-decoration: none;
        color: white;
        padding: 8px;
        &:hover {
          cursor: pointer;
        }
      `}
    >
      <IoIosAttach></IoIosAttach>
      <span
        css={css`
          text-align: center;
        `}
      >View Resume</span>
    </a>
  )
}

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
            background: linear-gradient(-45deg, #e15239, 	#f8c169, #dba8cd, #8ebc4f, 	#185fad);
            background-size: 500% 500%;
            animation: ${gradient} 20s ease infinite;
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
            <h1
              css={css`
                color: white;
              `}
            >
              Christian Russo
            </h1>
            <p
              css={css`
                color: white;
              `}
            >
              Hello!  I am a full-stack develop and writer based in Baltimore, Maryland.
            </p>
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
                    color: white;
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
                    color: white;
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
            <div
              css={css`
                display: flex;
              `}
            >
              <Button></Button>
              <a
                href="/"
                css={css`
                  padding-left: 15px;
                  text-decoration: none;
                  color: white;
                `}
              >
                <IoIosMail></IoIosMail>
              </a>
            </div>
            
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