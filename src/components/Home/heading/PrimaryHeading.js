import React from "react"
import Tagline from "./Tagline"
import Title from "./Title"

const Heading = props => {
  return (
    <div>
      <Tagline>{props.tagline}</Tagline>
      <Title>{props.title}</Title>
    </div>
  )
}

export default Heading
