import React from "react"
import styles from "./backdrop.module.scss"

const Backdrop = props => {
  return <div onClick={props.click} className={styles.backdrop}></div>
}

export default Backdrop
