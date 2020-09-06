import React, { useState, useEffect } from "react"
import styles from "./video.module.scss"
import Img from "gatsby-image"
import Title from "../Heading/Title"
import { graphql, useStaticQuery } from "gatsby"
import Video from "../Video/Video"

import SquareIcon from "../../../images/svg/rectangleHoriz.svg"
import AngledSquare from "../../../images/svg/rectangle45.svg"
import AngledSquareFull from "../../../images/svg/rectangle45full.svg"
import PlayBtn from "../../../images/svg/playBtn.svg"

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
      bcgImg: file(relativePath: { eq: "diamond-bg.png" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  const [video, setVideo] = useState(false)

  const stopVideo = element => {
    const iframe = element.querySelector("iframe")
    const video = element.querySelector("video")
    if (iframe !== null) {
      const iframeSrc = iframe.src
      iframe.src = iframeSrc
    }
    if (video !== null) {
      video.pause()
    }
  }

  useEffect(() => {
    const closeVideo = ({ target }) => {
      if (target.id !== "iframePlay") {
        const styleName = `.${styles.videoModule}`
        const container = document.querySelector(styleName)
        if (container !== null) {
          stopVideo(container)
          setVideo(false)
        }
      }
    }

    document.addEventListener("click", closeVideo)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return

      const styleName = `.${styles.videoModule}`
      const container = document.querySelector(styleName)
      stopVideo(container)
      setVideo(false)
    }
    document.addEventListener("keydown", keyHandler)

    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <div className={styles.videoModule + ` staticWrapper`}>
      <AngledSquare
        style={{
          position: "absolute",
          left: "0",
          top: "-23rem",
        }}
      />
      <AngledSquareFull
        style={{
          position: "absolute",
          right: "0",
          top: "-10rem",
          zIndex: "-1",
        }}
      />
      <div className={styles.boxBoarder}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.imgWrapper}>
          <Img
            className={styles.videoCTA}
            fluid={data.profileImg.childImageSharp.fluid}
          />
          <div
            className={styles.playBtn}
            id="iframePlay"
            onClick={() => setVideo(true)}
          >
            <PlayBtn
              style={{
                pointerEvents: "none",
              }}
            />
          </div>

          <SquareIcon className={styles.dotsHoriz} />
        </div>
        <Img
          fixed={data.bcgImg.childImageSharp.fixed}
          style={{
            position: "absolute",
            zIndex: "1",
            top: "7rem",
            right: "4rem",
          }}
        />
        <div className={styles.phaseTextWrapper}>
          <h4 className={styles.phaseText}>ROI DRIVEN APPROACH</h4>
          <Title>Your Campaigns Should be Performance Based</Title>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <Video showVid={video} />
    </div>
  )
}

export default VideoModule
