import React, { Component } from 'react'

export class CFunc extends Component {
    state={
        user:[
            {id:1,name:"Anna",class:"A"},
            {id:2,name:"Jone",class:"B"}
        ]
        
    }
  render() {
    //console.log(this.state.user)
    const user = this.state.user.map((user)=>{
        return(
            <>
        <h3 key={user.id}>{user.id}</h3>
        <h3>{user.name}</h3>
        <h3>{user.class}</h3>
        </>
        ); 
        
    })
    return (
      <div>
        <h3>{user}</h3>
      </div>
    )
  }
}

export default CFunc