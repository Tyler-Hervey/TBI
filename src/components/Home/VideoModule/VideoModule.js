import React, { useState, useEffect } from "react"
import videoStyles from "./video.module.scss"
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
        const styleName = `.${videoStyles.videoModule}`
        const container = document.querySelector(styleName)
        if (container !== null) {
          stopVideo(container)
          setVideo(false)
        }
      }
    }

    document.addEventListener("click", closeVideo)

    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return

      const styleName = `.${videoStyles.videoModule}`
      const container = document.querySelector(styleName)
      stopVideo(container)
      setVideo(false)
    }
    document.addEventListener("keydown", keyHandler)

    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <div className={videoStyles.videoModule + ` staticWrapper`}>
      <AngledSquare
        style={{
          position: "absolute",
          left: "0",
          top: "-23rem",
          zIndex: "1",
        }}
      />
      <AngledSquareFull
        className={videoStyles.angledSquareFull}
        style={{
          position: "absolute",
          right: "0",
          top: "-10rem",
          zIndex: "-1",
        }}
      />
      <div className={videoStyles.boxBoarder}></div>
      <div className={videoStyles.contentWrapper}>
        <div className={videoStyles.imgWrapper}>
          <Img
            className={videoStyles.videoCTA}
            fluid={data.profileImg.childImageSharp.fluid}
          />
          <div
            className={videoStyles.playBtn}
            id="iframePlay"
            onClick={() => setVideo(true)}
          >
            <PlayBtn
              style={{
                pointerEvents: "none",
              }}
            />
          </div>

          <SquareIcon className={videoStyles.dotsHoriz} />
        </div>
        <Img
          fixed={data.bcgImg.childImageSharp.fixed}
          style={{
            position: "absolute",
            zIndex: "1",
            top: "7rem",
            right: "4rem",
          }}
          className={videoStyles.dotsBcg}
        />
        <div className={videoStyles.phaseTextWrapper}>
          <h4 className={videoStyles.phaseText}>ROI DRIVEN APPROACH</h4>
          <Title>Your Campaigns Should be Performance Based</Title>
          <p className={videoStyles.paragraph}>
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
