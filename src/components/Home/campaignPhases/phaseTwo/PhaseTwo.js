import React from "react"
import styles from "./phaseTwo.module.scss"
import PhaseText from "./PhaseTwoText"
import Image from "./PhaseTwoImage"

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
