import React from "react"
import PhaseOne from "./phaseOne/PhaseOne"
import PhaseTwo from "./phaseTwo/PhaseTwo"
import PhaseThree from "./phaseThree/PhaseThree"

import styles from "./phase.module.scss"

const compaignPhases = () => {
  return (
    <section className={styles.wrapper}>
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
    </section>
  )
}

export default compaignPhases
