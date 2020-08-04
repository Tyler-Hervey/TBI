import React from "react"
import styles from "./SideDrawer.module.scss"
import { Link } from "gatsby"

const SideDrawer = props => {
  let drawerClasses = styles.SideDrawer
  if (props.show) {
    drawerClasses = styles.open
  }
  return (
    <div className={drawerClasses}>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <a href="/">Login</a>
      <Link to="/contact/" className={styles.btn}>
        Get Started Today
      </Link>
    </div>
  )
}

export default SideDrawer
