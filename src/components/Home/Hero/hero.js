import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import HeroText from "./heroText"
import styled from "styled-components"

const Hero = ({ children }) => {
  const getContent = graphql`
    query data {
      hero: contentfulHeroModule {
        backgroundImage {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        title
        subtitle
        buttonText
        buttonLink
      }
    }
  `
  const { hero } = useStaticQuery(getContent)
  console.log(hero)

  return (
    <HeroWrapper>
      <BackgroundImage
        className="heroWrapper"
        fluid={hero.backgroundImage.fluid}
        style={{
          height: "80vh",
          width: "100%",
          backgroundSize: "contain",
          backgroundPosition: "top right",
        }}
      >
        <HeroText text={hero} />
      </BackgroundImage>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  height: 80vh;
  width: 100%;
  background-size: contain;
  background-position: top right;
  display: flex;
  justify-content: center;

  .heroWrapper {
    align-items: left;
  }
`
export default Hero
