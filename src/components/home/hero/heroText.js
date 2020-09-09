import React from "react"
import styled from "styled-components"
import Btn from "./btn"

const HeroText = () => {
  return (
    <StyledWrapper>
      <h1 className="primaryHeading">
        A Better Way <br />
        To Reach Your Audience
      </h1>
      <p className="subHeading">
        Take your Marketing to the Next Level with a Result Driven
        Micro-Influencer Campaign
      </p>
      <Btn />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-left: 12rem;
  justify-content: center;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    margin-left: 0;
  }

  .primaryHeading {
    color: var(--SecondaryColor);
    font-size: 3.8rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 480px) {
      margin-left: 2rem;
    }
  }
  .subHeading {
    font-size: 2rem;
    max-width: 54rem;
    line-height: 26px;
    margin-bottom: 3rem;
    @media screen and (max-width: 480px) {
      margin-left: 2rem;
    }
  }
`
export default HeroText
