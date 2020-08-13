import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./phaseTwo.module.scss"

const Image = () => {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "influencerPhaseTwo.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Img className={styles.image} fluid={data.file.childImageSharp.fluid} />
  )
}

export default Image
