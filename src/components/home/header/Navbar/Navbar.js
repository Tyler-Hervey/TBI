import React, { Component } from "react"
import styles from "./navbar.module.scss"
import SiteLogo from "./SiteLogo/SiteLogo"
import Burger from "./mobileMenu/Burger"
import SideDrawer from "./mobileMenu/SideDrawer"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Navbar extends Component {
  state = {
    sideDrawerOpen: false,
  }

  clickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <SiteLogo />
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.mainMenu}>
            <AniLink fade to="/">
              Home
            </AniLink>
            <AniLink fade to="/contact/">
              Contact
            </AniLink>
          </div>
          <div className={styles.ctaMenu}>
            {/* <a href="/">Login</a> */}
            <AniLink fade to="/contact/" className={styles.btn}>
              Get Started Today
            </AniLink>
          </div>
        </div>
        <Burger clickHandler={this.clickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
      </nav>
    )
  }
}

export default Navbar
