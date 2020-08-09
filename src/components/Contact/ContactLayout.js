import React from "react"
import Layout from "../../components/layout"
import Header from "../../components/Contact/Header/Header"
import styles from "./contactLayout.module.scss"

const ContactLayout = () => {
  return (
    <Layout>
      <Header />
      <div>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          className={styles.formWrapper}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </div>
    </Layout>
  )
}

export default ContactLayout