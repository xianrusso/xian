import React from "react"
import { css, keyframes } from "@emotion/core"

const gradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const Background = () => {
  return (
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
}

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

const Resume = () => {
  return (
    <>
      <Background>
        <Header />
        <div>Hello</div>
      </Background>
    </>
  )
}

export default Resume;