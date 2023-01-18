import React from 'react'
import styles from '../appStyles.module.css'

function Inline() {
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
  return (
    // <div><h2 style={heading}>Inline</h2></div>
    <div><h2 className={styles.success}>Inline</h2></div>
  )
}

export default Inline