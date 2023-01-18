import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Bouton click !");
    }

  return (
    <div><button onClick={clickHandler}>Click</button></div>
  )
}

export default FunctionClick