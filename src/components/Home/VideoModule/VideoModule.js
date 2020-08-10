import React from "react"
import styles from "./video.module.scss"
import Img from "gatsby-image"
import Title from "../Heading/Title"
import { graphql, useStaticQuery } from "gatsby"

const VideoModule = () => {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "founder_headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className={styles.videoModule}>
      {/* <div className="linebreak"></div> */}
      <div className="imgWrapper">
        <Img
          className={styles.videoCTA}
          fluid={data.file.childImageSharp.fluid}
        />
      </div>

      <div className={styles.phaseTextWrapper}>
        <h4 className={styles.phaseText}>ROI DRIVEN APPROACH</h4>
        <Title>Your Campaigns Should be Performance Based</Title>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

export default VideoModule
