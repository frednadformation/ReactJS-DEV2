import React, { Component } from 'react'

class Inscription extends Component {
    render() {
        return (
            <div>

                <form action="http://localhost:5000/api/signup" method='POST'>

                    <label>Username : </label>
                    <input type="text" name='username' />
                    <br />
                    <label>Email : </label>
                    <input type="email" name='email' />
                    <br />
                    <label>Password : </label>
                    <input type="password" name='password' />
                    <br/>
                    <input type="submit" value="S'inscrire !" />
                </form>
            </div>
        )
    }
}

export default Inscription