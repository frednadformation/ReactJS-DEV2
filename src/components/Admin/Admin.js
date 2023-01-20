import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <React.Fragment>
    <nav>
        <Link to='/admin/dashboard'>Dashboard</Link>
        <Link to='/admin/gestionPost'>Gestion des posts</Link>
    </nav>
  
    
  <Outlet/>
    </React.Fragment>
    
  )
}


export default Admin