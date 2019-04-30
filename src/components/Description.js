import React from "react"
import { css } from "@emotion/core"

const Description = ({ info }) => {
  return (
    <p
      css={css`
        width: inherit;
        
      `}
    >
      {info}
    </p>
  )
}

export default Description