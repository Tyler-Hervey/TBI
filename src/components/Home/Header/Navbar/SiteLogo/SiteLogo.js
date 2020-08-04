import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "tbiLogo.png" }) {
        childImageSharp {
          fixed(height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default SiteLogo
