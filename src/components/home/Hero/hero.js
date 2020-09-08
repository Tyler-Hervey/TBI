import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import HeroText from "./heroText"
import styled from "styled-components"

const Hero = ({ children }) => {
  const bcgImg = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "phoneMockups.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <HeroWrapper>
      <BackgroundImage
        className="heroWrapper"
        fluid={
          (`linear-gradient(rgba(220, 15, 15, 0.73)`,
          bcgImg.file.childImageSharp.fluid)
        }
        style={{
          height: "80vh",
          width: "100%",
          backgroundSize: "contain",
          backgroundPosition: "top right",
        }}
      >
        <HeroText />
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
