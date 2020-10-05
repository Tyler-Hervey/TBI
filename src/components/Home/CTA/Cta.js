import React from "react"
import styled from "styled-components"
import Btn from "../Hero/btn"

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
      <Btn text="Get in Touch" />
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

  @media screen and (max-width: 900px) {
    padding: 5rem 0;
  }
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

export default Cta
