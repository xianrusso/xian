import React from "react"
import { css } from "@emotion/core"

const Label = ({ info }) => (
  <h2
    css={css`
      text-transform: uppercase;
      font-weight: 400;
      font-size: .7em;
    `}
  >
    {info}
  </h2>
)

export default Label