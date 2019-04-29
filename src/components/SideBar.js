import React from "react"
import { css, keyframes } from "@emotion/core"
import { graphql } from "gatsby"
import Img from "gatsby-image"


const Div = () => (
  <div
    css={css`
      width: 30%;
      
    `}
  >
  </div>
)

const SideBar = ({ data }) => {
  const imageData = data.file.childImageSharp.fluid;
  return (
    <>
      <Div>
        <Img fluid={imageData} />
      </Div>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "prof.jpg" }) {
      childImageSharp {
        fluid(quality: 100, width: 125) {
          ...GatsbySharpImageFluid
        }
      }
    }
  }
`