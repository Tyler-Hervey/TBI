import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import AltTitle from "../../AltTitle"
import whyMicro from "../../../constants/whyMicro"

const WhyInfluencers = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "whyMicro.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <section className={className}>
      <AltTitle
        center
        tagline="A More Enganged Audience"
        title="Something about micro influencers high engagement rate because of their niche and targeted Audience"
      />
      <div className="wrapper">
        <Img className="img" fluid={data.file.childImageSharp.fluid} />
        <div className="bullets">
          {whyMicro.map((item, index) => {
            return (
              <div key={index}>
                <h4>
                  <span className="icon">{item.icon}</span>
                  <span className="iconTitle">{item.title}</span>
                </h4>
                <p className="text">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default styled(WhyInfluencers)`
  .wrapper {
    display: flex;
    max-width: 120rem;
    margin: 8.5rem auto 0;
    justify-content: start;
    align-items: center;
  }
  .img {
    width: 70rem;
  }
  .bullets {
    position: relative;
    width: 40rem;
    margin-left: 2rem;
  }
  .bullets:before {
    content: "";
    position: absolute;
    width: 70rem;
    height: 55rem;
    background-color: var(--BgColor);
    top: 50%;
    top: 50%;
    transform: translateY(-50%);
    right: -20%;
    z-index: -1;
    border-radius: 10px;
  }
  .icon {
    background: white;
    padding: 1rem;
    border-radius: 50%;
    color: #5b6b7a;
    font-size: 1.5rem;
  }
  .iconTitle {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--SecondaryColor);
    margin-left: 1rem;
    line-height: 1.5;
  }
  .text {
    font-size: 1.4rem;
    font-weight: 400;
    margin-left: 5rem;
    line-height: 1.4;
  }
`
