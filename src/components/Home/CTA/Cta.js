import React from "react"
import styled from "styled-components"

const Cta = () => {
  return (
    <Wrapper>
      <Title>Speak with a Micro Influencer Expert</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
        reiciendis dicta eaque totam earum voluptates iure maxime itaque
        doloribus nihil, placeat ad at, exercitationem dolorem quibusdam magni
        tempore distinctio pariatur?
      </Paragraph>
      <Btn>Get in Touch</Btn>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-color: var(--TertiaryColor);
  min-height: 50vh;
  color: var(--White);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const Title = styled.h4`
  font-size: 3.8rem;
`

const Paragraph = styled.p`
  max-width: 110rem;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 3.3rem;
  margin-top: 4.5rem;
`
const Btn = styled.button`
  cursor: pointer;
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

  &:visited {
    color: var(--White);
  }
`

export default Cta
