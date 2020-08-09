import React from "react"
import Tagline from "../../Heading/Tagline"
import Title from "../../Heading/Title"
import styles from "../phase.module.scss"

const PhaseText = ({ number }) => {
  return (
    <div className={styles.phaseTextWrapper}>
      <Tagline>A/B TESTING</Tagline>
      <Title>Test Influencer Groups to Optimize ROI</Title>
      <p>
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
