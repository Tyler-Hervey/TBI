import React from "react"
import styled from "styled-components"
const Title = ({ tagline, title, className }) => {
  return (
    <div className={className}>
      <h4 className="tagline">{tagline}</h4>
      <h2 className="title">{title}</h2>
    </div>
  )
}

export default styled(Title)`
  text-align: ${props => (props.center ? "center" : "left")};
  max-width: ${props => (props.center ? "100rem" : "initial")};
  margin: ${props => (props.center ? "7.5rem auto 0" : "initial ")};
  .tagline {
    font-size: 1.6rem;
    color: var(--PrimaryColor);
    font-weight: 400;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 2.2px;
    margin-bottom: 0.4rem;

    @media screen and (max-width: 480px) {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }
  .title {
    font-size: 3.8rem;
    color: var(--SecondaryColor);
    font-weight: 500;
    line-height: 1.4;
    padding: 0 2rem;

    @media screen and (max-width: 480px) {
      font-size: 2.8rem;
      line-height: 1.2;
    }
  }
`
