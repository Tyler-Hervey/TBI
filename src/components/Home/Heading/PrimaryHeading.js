import React from "react"
import Tagline from "./Tagline"
import Title from "./Title"
import styles from "./heading.module.scss"

const Heading = props => {
  return (
    <div>
      <Tagline>{props.tagline}</Tagline>
      <Title>{props.title}</Title>
    </div>
  )
}

export default Heading
