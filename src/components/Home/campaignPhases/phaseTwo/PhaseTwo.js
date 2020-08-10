import React from "react"
import styles from "./phaseTwo.module.scss"
import PhaseText from "./PhaseText"
import Image from "./Image"

const PhaseTwo = () => {
  return (
    <div>
      <div className={styles.phaseWrapper}>
        <Image />
        <PhaseText phaseText={"phaseTextTwo"} style={{ marginLeft: "8rem" }} />
      </div>
    </div>
  )
}

export default PhaseTwo
