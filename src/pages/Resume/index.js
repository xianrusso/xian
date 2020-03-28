import React from "react"
import { css, keyframes } from "@emotion/core"
import {
  Background as BackgroundStyled,
  Header as HeaderStyled,
  SideBar as SideBarStyled,
} from "./styles"
import {Helmet} from "react-helmet"

const gradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const slideDown = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-5em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Name = () => {
  return (
    <h1
      css={css`
        margin: 0;
        padding: 0;
        width: 100%;
        color: white;
        font-size: 3em;
        line-height: 1.2;
        animation: ${slideDown} 1s ease;
      `}
    >

    </h1>
  )
}

const Resume = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Bitter:700|Oxygen' />
      </Helmet>
      <BackgroundStyled></BackgroundStyled>
    </>
  )
}

export default Resume