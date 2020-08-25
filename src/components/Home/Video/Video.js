import React from "react"

import styles from "./iframe.module.scss"

const Video = props => {
  let iframeStyles = styles.overlay

  props.showVid ? (iframeStyles = styles.active) : (iframeStyles = "")

  return (
    <div className={`${styles.overlay} ${iframeStyles}`}>
      {console.log(props.showVid)}
      <iframe
        className={styles.videoIframe}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gtxpvSYGoRI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id="founder-vid"
      />
    </div>
  )
}

export default Video
