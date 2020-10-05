import React from "react"
import styled from "styled-components"
import Btn from "./btn"

const HeroText = ({ text }) => {
  const { title, subtitle, buttonText, buttonLink } = text

  return (
    <StyledWrapper>
      <h1 className="primaryHeading">{title}</h1>
      <p className="subHeading">{subtitle}</p>
      <Btn text={buttonText} link={buttonLink} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-left: 12rem;
  justify-content: center;
  max-width: 40rem;

  @media screen and (max-width: 600px) {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    margin-left: 0;
    bottom: 4rem;
    background: rgba(255, 255, 255, 0.2);/
  }

  .primaryHeading {
    color: var(--SecondaryColor);
    font-size: 3.8rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 480px) {
      font-size: 3.6rem;
      line-height: 1.2;
    }
  }

  .subHeading {
    font-size: 2rem;
    max-width: 54rem;
    line-height: 26px;
    margin-bottom: 3rem;
    @media screen and (max-width: 480px) {
      /* margin-left: 2rem; */
    }
  }
`
export default HeroText
