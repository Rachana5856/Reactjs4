import React from 'react'

function FunctionClick() {

    function Clickevent(){
        console.log("Hello")
    }


  return (
    <div>
        <button onClick={Clickevent}>Function Click</button>
    </div>
  )
}

export default FunctionClick