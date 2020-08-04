import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.styles.css"
import Hero from "../components/Home/Hero/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <h1>TESTING STYLING</h1>
  </Layout>
)

export default IndexPage
