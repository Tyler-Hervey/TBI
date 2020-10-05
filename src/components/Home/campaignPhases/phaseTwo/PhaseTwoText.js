import React from "react"
import Title from "../../heading/Title"
import styles from "./phaseTwo.module.scss"

const PhaseText = props => {
  return (
    <div className={styles.phaseTextWrapper}>
      <h4 className={styles.phaseTextTwo}>ENGAGEMENT</h4>
      <Title>Introduce the Product/Service While Tracking Engagement</Title>
      <p className={styles.paragraph}>
        Influencers encourage audience engagement around the brand's
        product/service through introducing the specifics of the product.
      </p>
    </div>
  )
}

export default PhaseText
