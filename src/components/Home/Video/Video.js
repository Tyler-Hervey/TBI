import React from "react"

const Video = () => {
  return (
    <div className="overlay">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gtxpvSYGoRI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Video
