import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./ourclients.module.scss"

const OurClients = () => {
  const getClient = graphql`
    query clientData {
      clients: contentfulClients {
        title
        clientLogos {
          fixed(width: 95) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  `
  const { clients } = useStaticQuery(getClient)

  return (
    <section>
      <div className={styles.clientWrapper}>
        <h4 className={styles.clientHeading}>{clients.title}</h4>
        <div className={styles.logoContainer}>
          {clients.clientLogos.map(image => (
            <Img
              key={image.fixed}
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
