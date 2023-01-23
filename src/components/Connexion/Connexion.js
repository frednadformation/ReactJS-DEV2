import React, { Component } from 'react'

class Connexion extends Component {
  render() {
    return (
      <div>
        <form action= "http://localhost:5000/api/signin" method='POST'>
            <label>Email : </label>
            <input type="email" name='email'/>
            
            <label>Password : </label>
            <input type="password" name='password'/>

            <input type="submit" value="Log in !"/>
        </form>

      </div>
    )
  }
}

export default Connexion