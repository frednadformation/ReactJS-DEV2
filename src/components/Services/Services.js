import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <div>
    Voici la liste de nos Services : 
        <nav>
            <Link to ='/services/marketing'>Service Marketing</Link>
            <Link to ='/services/developpement'>Service Développement</Link>
        </nav>
        <Outlet />
     
    </div>
  )
}

export default Services