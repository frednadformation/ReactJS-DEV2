import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {
    let message;
    // if(this.state.isLoggedIn)
    //     return (
    //       <div>Welcome les devs !</div>
    //     )
    // else
    //     return (
    //         <div>Welcome Guest !</div>
    //     )

    // return this.state.isLoggedIn ? ( <div>Welcome les devs !</div> ) : ( <div>Welcome Guest !</div> )
    // return this.state.isLoggedIn && <div>Welcome les devs !</div>
    
    if(this.state.isLoggedIn)
        message = <div>Welcome les devs !</div>
        
    else
        message = <div>Welcome Guest !</div>

    return message;
        
  }
}

export default UserGreeting