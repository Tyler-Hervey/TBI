import React from "react"
import styles from "./heading.module.scss"

const Tagline = props => {
  return (
    <h4
      className={
        props.phaseText === "phaseTextOne" ? "phaseTextOne" : styles.tagline
      }
    >
      {props.children}
    </h4>
  )
}

export default Tagline
