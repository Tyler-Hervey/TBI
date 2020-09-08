import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import AltTitle from "../../AltTitle"
import whyMicro from "../../../constants/whyMicro"
import TallSquares from "../../../images/svg/squareDotsTall.svg"

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
        <TallSquares
          style={{
            position: "absolute",
            left: "0",
          }}
        />

        <div className="content-wrapper">
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

        <TallSquares
          style={{
            position: "absolute",
            right: "0",
          }}
        />
      </div>
    </section>
  )
}

const whyInfluencers = styled(WhyInfluencers)`
  .wrapper {
    display: flex;
    position: relative;
    width: 100%;
    margin: 8.5rem auto 0;
    justify-content: center;
    align-items: center;
  }

  .content-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
  .img {
    width: 50vw;
    @media screen and (max-width: 900px) {
      width: 95vw;
      margin-bottom: 5rem;
    }
  }
  .bullets {
    width: 40rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
      background-color: var(--BgColor);
      border-radius: 10px;
      padding: 2rem;
      width: 70vw;
      margin: 0;
    }
  }

  .bullets:before {
    content: "";
    position: absolute;
    width: 70rem;
    height: 55rem;
    background-color: var(--BgColor);
    transform: translateY(-50%);
    top: 50%;
    right: -2rem;
    z-index: -1;
    border-radius: 10px;

    @media screen and (max-width: 900px) {
      display: none;
    }
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
export default whyInfluencers
