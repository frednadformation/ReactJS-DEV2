import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log("Bonton click !");
    }
  render() {
    return (
      <div><button onClick={this.clickHandler}>Click class</button></div>
    )
  }
}

export default ClassClick