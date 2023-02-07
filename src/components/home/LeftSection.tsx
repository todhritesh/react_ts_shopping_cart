import React from 'react'
import styles from "./left-section.module.css"
function LeftSection() {
  return (
    <>
    <div className={`display-2 text-white fw-medium`}>REACT-TYPESCRIPT</div>
    <p className={`display-4 text-white my-3 ${styles.typewriter}`}>CART SYSTEM</p>
    <div>
        <button className="btn btn-lg btn-outline-light">GET STARTED</button>
    </div>
    </>
  )
}

export default LeftSection