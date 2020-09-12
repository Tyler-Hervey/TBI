/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "../header"
import "./layout.css"

import FBIcon from "../../images/svg/facebook.svg"
import IGIcon from "../../images/svg/instagram.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer>
          <div className="column1">
            <h4>Twillo Brand Influencers</h4>
            <p>Leading Performance driven influencer marketing.</p>
            <div className="signature">
              Copyright© {new Date().getFullYear()} Twillo Brand Influencers
              <br />
              Web Development and Design by{" "}
              <a href="https://www.moximetrics.com">Moximetrics </a>
            </div>
          </div>
          <div className="column2"></div>
          <div className="column3">
            <a
              className="icon"
              href="https://www.facebook.com/Twillo.Events"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FBIcon />
            </a>
            <a
              className="icon"
              href="https://www.instagram.com/twillo_brandinfluencers/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IGIcon />
            </a>
          </div>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Footer = styled.footer`
  min-height: 30vh;
  background-color: var(--QuarternaryColor);
  display: flex;
  color: var(--White);
  padding-left: 7rem;
  padding-top: 4rem;

  h4 {
    font-size: 3.8rem;
    margin-bottom: 4rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 2rem;
    margin-bottom: 4rem;
  }
  a {
    color: var(--White);
    margin-left: 0;
  }
  .icon {
    margin: 2rem;
  }
  .column1 {
    margin: 2rem auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .signature {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }

  .column2 {
    flex: 1;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .column3 {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
`
export default Layout
