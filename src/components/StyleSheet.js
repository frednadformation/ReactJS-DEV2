import React from 'react'
import "./styles/myStyle.css"

function StyleSheet(props) {

    let nomClass = props.primary ? "primary" : "";
  return (
    <div><h1 className={nomClass}>StyleSheet</h1></div>
  )
}

export default StyleSheet