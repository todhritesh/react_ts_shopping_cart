import React from 'react'
import styles from "./left-section.module.css"
import { Link } from "react-router-dom";

function LeftSection() {
  return (
    <>
    <div className={`display-2 text-white fw-medium`}>REACT-TYPESCRIPT</div>
    <p className={`display-4 text-white my-3 ${styles.typewriter}`}>CART SYSTEM</p>
    <div>
        <Link to="/store" className="btn btn-lg btn-outline-light">GET STARTED</Link>
    </div>
    </>
  )
}

export default LeftSection