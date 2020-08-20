import React from "react"

const Video = () => {
  return (
    <div className="overlay">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gtxpvSYGoRI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
