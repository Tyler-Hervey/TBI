import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./ourclients.module.scss"

const OurClients = () => {
  const getClient = useStaticQuery(graphql`
    query clientData {
      clients: contentfulClients {
        title
        clientLogos {
          id
          fixed(width: 85) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  `)

  const { clients } = getClient

  return (
    <section>
      <div className={styles.clientWrapper}>
        <h4 className={styles.clientHeading}>{clients.title}</h4>
        <div className={styles.logoContainer}>
          {clients.clientLogos.map(image => (
            <Img
              key={image.id}
              className={styles.clientLogos}
              fixed={image.fixed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClients
