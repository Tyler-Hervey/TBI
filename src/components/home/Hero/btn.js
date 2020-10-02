import React from "react"
import styled from "styled-components"

const btn = props => {
  console.log(props)
  return <StyledLink href={props.link}>{props.text}</StyledLink>
}

const StyledLink = styled.a`
  display: inline-block;
  margin-left: 0;
  background-color: var(--PrimaryColor);
  color: var(--White);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  max-width: 23rem;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  transition: all 1s ease;
  cursor: pointer;

  :hover {
    transform: translateY(-6px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 480px) {
    margin-left: 2rem;
  }
`
export default btn
