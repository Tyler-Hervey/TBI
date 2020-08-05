import React from "react"
import styles from "./heading.module.scss"

const Tagline = props => {
  return <h4 className={styles.tagline}>{props.children}</h4>
}

export default Tagline
