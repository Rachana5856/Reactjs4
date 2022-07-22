import React from 'react'

function Inline() {
    const heading={
        color:'red',
        fontSize:'120px',
        textAlign: 'center'
    }
  return (
    <div>
        <h3 style={heading}>This is Inline Styling</h3>
    </div>
  )
}

export default Inline