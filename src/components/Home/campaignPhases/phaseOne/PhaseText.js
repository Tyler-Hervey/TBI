import React from "react"
import Tagline from "../../Heading/Tagline"
import Title from "../../Heading/Title"
import styles from "./phaseOne.module.scss"

const PhaseText = props => {
  return (
    <div className={styles.phaseTextWrapper}>
      <h4 className={styles.phaseTextOne}>A/B TESTING</h4>
      <Title>Test Influencer Groups to Optimize ROI</Title>
      <p className={styles.paragraph}>
        The goal is to determine the top performing influencers. Twillo places
        influencers into separate test groups to test promotional language,
        different social media platforms (Instagram,Tik Tok, FB), different
        influencer audiences. Top performing influencers from each group move
        onto the next phase of the campaign.
      </p>
    </div>
  )
}

export default PhaseText
