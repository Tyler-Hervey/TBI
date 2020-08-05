import React from "react"
import Tagline from "./Tagline"
import Title from "./Title"

const CenteredHeading = props => {
  return (
    <div>
      <Tagline>{props.tagline}</Tagline>
      <Title>{props.title}</Title>
    </div>
  )
}

export default CenteredHeading
