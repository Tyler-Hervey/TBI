import React from "react"
import styles from "./phaseOne.module.scss"
import PhaseText from "./PhaseText"
import Image from "./Image"

const PhaseOne = () => {
  return (
    <div className={styles.phaseWrapper}>
      <PhaseText />
      <Image />
    </div>
  )
}

export default PhaseOne
