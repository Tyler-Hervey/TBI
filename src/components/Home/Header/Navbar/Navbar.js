import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.scss"
import SiteLogo from "./SiteLogo/SiteLogo"
import Burger from "./mobileMenu/Burger"
import SideDrawer from "./mobileMenu/SideDrawer"
import Backdrop from "./mobileMenu/Backdrop"

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
    // let backdrop
    // if (this.state.sideDrawerOpen) {
    //   backdrop = <Backdrop click={this.backdropClickHandler} />
    // }
    return (
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <SiteLogo />
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.mainMenu}>
            <Link to="/">Home</Link>
            <Link to="/contact/">Contact</Link>
          </div>
          <div className={styles.ctaMenu}>
            <a href="/">Login</a>
            <Link to="/contact/" className={styles.btn}>
              Get Started Today
            </Link>
          </div>
        </div>
        <Burger clickHandler={this.clickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {/* <Backdrop show={this.state.sideDrawerOpen} /> */}
      </nav>
    )
  }
}

export default Navbar
