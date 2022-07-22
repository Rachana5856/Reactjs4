import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            address:''
        }   

} 

handleusername=(event)=>{
    this.setState({
       username: event.target.value
    });
}

handleaddress=(event)=>{
    this.setState({
        address:event.target.value
    })
}

handleSubmit=(event)=>{
    alert(`${this.state.username} ${this.state.address}`)
}
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>USERNAME: </label>
                <input type="text" value={this.state.username} onChange={this.handleusername}></input>      
            </div>
            <br></br>
            <div>
                <label>Address: </label>
                <textarea value={this.state.address} onChange={this.handleaddress}></textarea>     
            </div>
            <br></br>
            <button type='Submit'>Submit</button>
        </form>
      
    )
  }
}

export default Form