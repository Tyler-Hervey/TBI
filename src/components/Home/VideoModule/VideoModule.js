import React, { useState, useEffect } from "react"
import styles from "./video.module.scss"
import Img from "gatsby-image"
import Title from "../Heading/Title"
import { graphql, useStaticQuery } from "gatsby"
import Video from "../Video/Video"

import playBtn from "./playBtn.svg"

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
        stopVideo(container)
        setVideo(false)
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
      <div className={styles.contentWrapper}>
        <div className={styles.imgWrapper}>
          <Img
            className={styles.videoCTA}
            fluid={data.profileImg.childImageSharp.fluid}
          />
          <img
            className={styles.playBtn}
            id="iframePlay"
            src={playBtn}
            onClick={() => setVideo(!video)}
          />
        </div>
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
