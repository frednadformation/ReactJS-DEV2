import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        this.setState((prevState, props) =>(
        {
            count: prevState.count + props.value
        }));
    }


    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
      <div>
      <h1>compteur : {this.state.count}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
        <button onClick={()=>this.incrementFive()}>Increment Five</button>
      </div>
      
    )
  }
}

export default Counter