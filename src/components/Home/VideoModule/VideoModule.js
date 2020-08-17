import React from "react"
import styles from "./video.module.scss"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Title from "../Heading/Title"
import { graphql, useStaticQuery } from "gatsby"
import Video from "../Video/Video"

const VideoModule = () => {
  const data = useStaticQuery(graphql`
    {
      profileImg: file(relativePath: { eq: "founder_headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bcgImg: file(relativePath: { eq: "videoModule/videoBG.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className={styles.videoModule}>
      {/* <div className="linebreak"></div> */}
      <BackgroundImage fluid={data.bcgImg.childImageSharp.fluid}>
        <div className={styles.contentWrapper}>
          <div className="imgWrapper">
            <Img
              className={styles.videoCTA}
              fluid={data.profileImg.childImageSharp.fluid}
            />
          </div>
          <div className={styles.phaseTextWrapper}>
            <h4 className={styles.phaseText}>ROI DRIVEN APPROACH</h4>
            <Title>Your Campaigns Should be Performance Based</Title>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </BackgroundImage>
      />
      <Video />
    </div>
  )
}

export default VideoModule
