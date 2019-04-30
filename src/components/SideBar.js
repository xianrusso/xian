import React from "react"
import { css, keyframes } from "@emotion/core"
import Label from "./Label"
import Description from "./Description"

const Div = () => (
  <div
    css={css`
      width: 30%;
    `}
  >
  </div>
)

const Photo = () => (
  <div>
    Placeholder for an image
  </div>
)

const About = () => (
  <div
    css={css`
      width: inherit;
      height: auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    `}
  >
    <Label>
      about
    </Label>
    <Description>
      Howdy!  I'm a web developer and writer from Baltimore, Maryland.  I enjoy clean code, good books, arduous hikes, and a sick guitar riff.
    </Description>
  </div>
)

const Skills = () => (
  <div
  css={css`
    width: inherit;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `}
>
  <Label>
    skill
  </Label>
  <Description>
    JavaScript is my bread and butter.  I'm solid in Python and C, as well.  I can build relational databases in MySQL and if you're looking for a NoSQL, then I can write a database in MongoDB.  I also have experience with GraphQL.
  </Description>
</div>
)

const SideBar = () => {
  return (
    <>
      <Div>
        <Photo></Photo>
        <About></About>
        <Skills></Skills>
      </Div>
    </>
  )
}

export default SideBar