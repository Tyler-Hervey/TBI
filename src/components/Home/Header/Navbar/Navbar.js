import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "./navbar.styles.scss"
import Img from "gatsby-image"

const Navbar = () => {
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
  console.log(data)

  return (
    <nav id="navbar">
      <div className="logo-container">
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
      <div className="menu-container">
        <div className="main-menu">
          <Link to="/">Home</Link>
          <Link to="/conctact/">Contact</Link>
        </div>
        <div className="cta-menu">
          <a href="/">Login</a>
          <Link className="primaryBTN">Get Started Today</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
