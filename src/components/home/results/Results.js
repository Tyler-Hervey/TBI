import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import AltTitle from "../../AltTitle"
import styles from "./results.module.scss"

const Results = () => {
  const data = useStaticQuery(graphql`
    {
      bcgImg: file(relativePath: { eq: "social-logos-bcg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      reportImg: file(
        relativePath: { eq: "influencer-performance-report.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <section>
      <div>
        <AltTitle
          center
          tagline="Only Pay For Results"
          title="We Help You Identify the Top Performing Influencers Driving Results for Your Campaign"
        />
        <BackgroundImage
          className={styles.resultsGraphic}
          fluid={data.bcgImg.childImageSharp.fluid}
          style={{
            backgroundSize: "contain",
          }}
        >
          <Img
            fluid={data.reportImg.childImageSharp.fluid}
            className={styles.report}
          />
        </BackgroundImage>
      </div>
    </section>
  )
}

export default Results
