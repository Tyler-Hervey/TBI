import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./ourclients.module.scss"

const OurClients = () => {
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "logos" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(height: 150) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery)
  return (
    <section>
      <div className={styles.clientWrapper}>
        <h4 className={styles.clientHeading}>Some of Our Happy Clients</h4>
        <div className={styles.logoContainer}>
          {images.map(image => (
            <Img
              className={styles.clientLogos}
              fixed={image.node.childImageSharp.fixed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClients
