import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.styles.css"
import Hero from "../components/Home/Hero/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <h1>HERO WRAPPER</h1>
    </Hero>
  </Layout>
)

export default IndexPage
