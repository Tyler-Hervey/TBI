import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "tbiLogo.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <AniLink fade to="/">
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{
          padding: "2rem",
        }}
      />
    </AniLink>
  )
}

export default SiteLogo
