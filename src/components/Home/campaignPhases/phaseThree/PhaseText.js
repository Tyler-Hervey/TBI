import React from "react"
import Tagline from "../../Heading/Tagline"
import Title from "../../Heading/Title"
import styles from "./phaseThree.module.scss"

const PhaseText = props => {
  return (
    <div className={styles.phaseTextWrapper}>
      <h4 className={styles.phaseTextThree}>PERFORMANCE & OPTIMIZATION</h4>
      <Title>Convert, Convert, Convert</Title>
      <p className={styles.paragraph}>
        Top performing influencers from Phase 1, 2 will continue to Phase 3.
        Phase's goal is optimized with top performing influencers whose sole
        intent is to have the audience take action.
      </p>
    </div>
  )
}

export default PhaseText
