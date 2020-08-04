import React from "react"
import styling from "./hero.module.scss"
import Btn from "./btn"

const HeroText = () => {
  return (
    <div className={styling.contentWrapper}>
      <h1 className={styling.primaryHeading}>
        A Better Way <br />
        To Reach Your Audience
      </h1>
      <p className={styling.subHeading}>
        Take your Marketing to the Next Level with a Result Driven
        Micro-Influencer Campaign
      </p>
      <Btn />
    </div>
  )
}

export default HeroText
