import React from "react"
import styles from "./burger.module.scss"

const Burger = props => {
  return (
    <div onClick={props.clickHandler} className={styles.button}>
      <div />
    </div>
  )
}

export default Burger
