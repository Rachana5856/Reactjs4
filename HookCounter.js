import React, { useState } from 'react'

function HookCounter() {

    const [name, setname]=useState("Hello , Welcome to React js")
    const [count ,setcount]=useState("No of React js Users")

    const SubmitHandle=()=>{
        setname("This is fun")
        setcount("Are enomorous")
    }

  return (
    <div>
        {name}<br></br>
        {count}<br></br>
        <button onClick={SubmitHandle}>Submit</button>
    </div>
  )
}

export default HookCounter