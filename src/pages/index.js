import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.styles.css"
import Hero from "../components/Home/Hero/hero"
import OurClients from "../components/Home/OurClients/OurClients"
import WhyInfluencers from "../components/home/whyInfluencers/WhyInfluencers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <OurClients />
    <WhyInfluencers />
  </Layout>
)

export default IndexPage
