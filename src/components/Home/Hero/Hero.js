import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

import "./hero.styles.scss"

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
    <div className="heroWrapper">
      <BackgroundImage
        className=""
        fluid={bcgImg.file.childImageSharp.fluid}
        className="heroWrapper"
      >
        {children}
      </BackgroundImage>
    </div>
  )
}

export default Hero
