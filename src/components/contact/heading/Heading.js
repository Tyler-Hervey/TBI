import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad unde ea
        voluptatibus iure molestias deleniti quam vitae! Eum culpa dolorem esse
        tempora vero totam, expedita distinctio quibusdam assumenda ad
        accusamus.
      </Paragraph>
      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>Name</label>
        <input type="text" name="name" id="name" />

        <label>Email</label>
        <input type="email" name="email" id="email" />

        <label>Subject</label>
        <input type="text" name="subject" id="subject" />

        <label>Message</label>
        <textarea name="message" id="message" rows="5" />

        <a>
          <button type="submit">Get in Touch</button>
        </a>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 60vh;

  input {
    min-width: 20rem;
    border-radius: 5px;
    border: 1px solid #a4a4a4;
    margin: 0.5rem;
  }
  textarea {
    min-width: 20rem;
    border-radius: 5px;
    border: 1px solid #a4a4a4;
  }

  button {
    display: inline-block;
    margin-left: 0;
    background-color: var(--PrimaryColor);
    color: var(--White);
    padding: 1rem 2rem;
    border: none;
    border-radius: 12px;
    max-width: 23rem;
    font-size: 1.6rem;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    transition: all 1s ease;
    margin-top: 2rem;

    :hover {
      transform: translateY(-6px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`

const Title = styled.h1`
  font-size: 3.8rem;
  color: var(--PrimaryColor);
`

const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 2rem;
  max-width: 50rem;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 120rem;
`

export default Header
