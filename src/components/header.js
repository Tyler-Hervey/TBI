import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Home/Header/Navbar/Navbar"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Twillo Brand Influencers`,
}

export default Header
