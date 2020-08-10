import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.styles.css"
import Hero from "../components/Home/Hero/hero"
import OurClients from "../components/Home/OurClients/OurClients"
import WhyInfluencers from "../components/home/whyInfluencers/WhyInfluencers"
import Results from "../components/home/Results/Results"
import CampaignPhases from "../components/Home/campaignPhases/compaignPhases"
import VideoModule from "../components/Home/VideoModule/VideoModule"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <OurClients />
    <WhyInfluencers />
    <Results />
    <CampaignPhases />
    <VideoModule />
  </Layout>
)

export default IndexPage
