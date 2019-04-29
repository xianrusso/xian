import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { css, keyframes } from "@emotion/core"
import { GoMarkGithub } from "react-icons/go"
import { IoLogoInstagram, IoIosMail, IoIosAttach } from "react-icons/io"

const hoverEffect = keyframes`
  0% { opacity: 0.7; }
  100% { opacity: 1.0; }
`

const gradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const Button = () => {
  return (
    <Link
      to="/Resume/"
      css={css`
        text-decoration: none;
        display: flex;
        // border-radius: 2em;
        // border-width: initial;
        // border-color: initial;
        // border-style: none;
        font-weight: 400;
        justify-content: center;
        align-items: center;
        // background: rgba(255, 255, 255, 0.2);
        // border: 1px solid white;
        color: white;
        // padding: .25em .5em;
        text-transform: uppercase;
        &:hover {
          cursor: pointer;
          animation: ${hoverEffect} 1s ease forwards;
        }
        opacity: 0.7;
      `}
    >
      <IoIosAttach
        css={css`
          margin-right: .1em;
          font-size: 1.75em;
        `}
      />
      <span
        css={css`
          text-align: center;
          font-size: 0.85em;
        `}
      >
        View Resume
      </span>
    </Link>
  )
}

const EmailButton = () => {
  return (
    <a
      href="mailto:iamchristianrusso@gmail.com"
      css={css`
        padding-left: 15px;
        text-decoration: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: .7;
        &:hover {
          animation: ${hoverEffect} 1s ease forwards;
        }
      `}
    >
      <IoIosMail
        css={css`
          margin-right: .1em;
          font-size: 1.75em;
        `}
      />
    </a>
  )
}

const Home = ({ children }) => (
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
                font-size: 3.7em;
                text-shadow: 2px 2px #bbb;
              `}
            >
              Christian Russo
            </h1>
            <p
              css={css`
                color: white;
                font-size: 1em;
                text-shadow: .65px .65px #bbb;
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
                    &:link, &:hover, &:active, &:visited { text-decoration: none; }
                    opacity: .7;
                    &:hover {
                      animation: ${hoverEffect} 1s ease forwards;
                    }
                  `}  
                >
                  <GoMarkGithub
                    css={css`
                      margin-right: .1em;
                      font-size: 1.75em;
                      
                    `}
                  />
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
                    opacity: .7;
                    &:hover {
                      animation: ${hoverEffect} 1s ease forwards;
                    }
                  `}  
                >
                  <IoLogoInstagram
                    css={css`
                      margin-right: .1em;
                      font-size: 1.75em;
                    `}
                  />
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
              <EmailButton />
            </div>
            
            {children}
          </div>
        </div>
      </>
    )}
  />
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home