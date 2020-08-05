import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import CenteredHeading from "../Heading/CenteredHeading"
import styles from "./results.module.scss"

const Results = () => {
  const rptImg = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "reportGraphic.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section>
      <div>
        <CenteredHeading
          tagline="Only Pay For Results"
          title="We Help You Identify the Top Performing Influencers Driving Results for Your Campaign"
        />
        <Img
          className={styles.resultsGraphic}
          fluid={rptImg.file.childImageSharp.fluid}
        />
      </div>
    </section>
  )
}

export default Results
