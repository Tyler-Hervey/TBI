import React from "react"
import styles from "./phaseOne.module.scss"
import PhaseText from "./PhaseOneText"
import Image from "./PhaseOneImage"

const PhaseOne = () => {
  return (
    <div className={styles.phaseWrapper}>
      <PhaseText phaseText={"phaseTextOne"} />
      <Image />
    </div>
  )
}

export default PhaseOne
