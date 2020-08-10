import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./ourclients.module.scss"

const OurClients = () => {
  const allImagesQuery = useStaticQuery(graphql`
    query {
      files: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
        edges {
          node {
            childImageSharp {
              id
              fixed(height: 50) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className={styles.clientWrapper}>
        <h4 className={styles.clientHeading}>Some of Our Happy Clients</h4>
        <div className={styles.logoContainer}>
          {allImagesQuery.files.edges.map(image => (
            <Img
              key={image.node.childImageSharp.id}
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
