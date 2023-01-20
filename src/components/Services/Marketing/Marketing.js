import React from 'react'
import { useLocation } from 'react-router-dom'

function Marketing() {
  const location = useLocation()
  console.log(location);
  
  return (
    <div>Marketing</div>
  )
}

export default Marketing