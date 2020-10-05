import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "./index.styles.css"
import Hero from "../components/Home/Hero/hero"
import OurClients from "../components/Home/OurClients/OurClients"
import WhyInfluencers from "../components/Home/whyInfluencers/WhyInfluencers"
import Results from "../components/Home/results/Results"
import CampaignPhases from "../components/Home/campaignPhases/compaignPhases"
import VideoModule from "../components/Home/VideoModule/VideoModule"
import Cta from "../components/Home/CTA/Cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <OurClients />
    <WhyInfluencers />
    <Results />
    <CampaignPhases />
    <VideoModule />
    <Cta />
  </Layout>
)

export default IndexPage
