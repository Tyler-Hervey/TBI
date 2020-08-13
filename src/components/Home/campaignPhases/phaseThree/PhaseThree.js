import React from "react"
import styles from "./phaseThree.module.scss"
import PhaseText from "./PhaseText"
import Image from "./Image"

const PhaseThree = () => {
  return (
    <div>
      <div className={styles.phaseWrapper}>
        <PhaseText
          phaseText={"phaseTextThree"}
          style={{ marginLeft: "8rem" }}
        />
        <Image />
      </div>
    </div>
  )
}

export default PhaseThree
