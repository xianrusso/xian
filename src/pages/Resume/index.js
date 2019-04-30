import React from "react"
import { css, keyframes } from "@emotion/core"

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

const Background = () => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 100%;
      width: 100%;
      background: red;
    `}
  >

  </div>
)

const Header = () => {
  return (
    <div
      css={css`
        height: 50%;
        width: 100%;
        background: linear-gradient(-45deg, #e15239, 	#f8c169, #dba8cd, #8ebc4f, 	#185fad);
        background-size: 500% 500%;
        animation: ${gradient} 20s ease infinite;
      `}
    >
    </div>
  )
}

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

const Div = ({ data }) => (
  <div
    css={css`
      width: 30%;
    `}
  >
    {data}
  </div>
)

const Resume = ({ data }) => {
  return (
    <>
      <Background></Background>
    </>
  )
}

export default Resume