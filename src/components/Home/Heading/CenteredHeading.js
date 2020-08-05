import React from "react"
import Tagline from "./Tagline"
import Title from "./Title"
import styles from "./heading.module.scss"

const CenteredHeading = props => {
  return (
    <div className={styles.titleCenter}>
      <Tagline>{props.tagline}</Tagline>
      <Title>{props.title}</Title>
    </div>
  )
}

export default CenteredHeading
