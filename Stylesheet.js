import React from 'react'
import './Style.css'

function Stylesheet(props) {
    const className = props.isvalue ? 'demo':'demo1';
  return (
    <div >
        <h1 className={`${className} demo2`}>This is css styling</h1>    
    </div>
  )
}

export default Stylesheet