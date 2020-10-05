import React from "react"

const menu = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <a href="/">Login</a>
      <Link to="/contact/" className={styles.btn}>
        Get Started Today
      </Link>
    </div>
  )
}

export default menu
