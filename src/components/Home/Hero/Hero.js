import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import HeroText from "./heroText"

import heroStyles from "./hero.module.scss"

const Hero = ({ children }) => {
  const bcgImg = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "phoneMockups.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div>
      <BackgroundImage
        className={heroStyles.heroWrapper}
        fluid={bcgImg.file.childImageSharp.fluid}
      >
        <HeroText />
      </BackgroundImage>
    </div>
  )
}

export default Hero
