import React, { Component } from 'react'

export class CFunctionClick extends Component {
    

    constructor(props)
    {
        super(props);
        this.state={
            msg:"Electronics",
            roll:this.props.roll
        }
    }

    clickevent=()=>{
        this.setState({
            msg:"Computer Science"
        })
        console.log("Hello class")
    }

    clickevent2=(e)=>{
       e.preventDefault(); 
       console.log("Event prevented")
    }




  render() {
   

    const number=[1,2,3,4];
    const newnumber = number.map(function(number){
        return <li key={number}>{number}</li>
    });

    const num=[5, 6, 7, 8];


    return (
      <>
        <h2>{this.state.msg}</h2>
        <button onClick={this.clickevent}>Class Click</button><br/>
        <h2>{this.setState.msg}</h2>
        <a href='https://www.google.com/search?q=reactjs+w3schools&oq=react&aqs=chrome.0.69i59l2j69i57j69i59j69i61j69i60l3.4543j0j7&sourceid=chrome&ie=UTF-8' onClick={this.clickevent2}>Class Click2</a>
        <h2>{this.props.roll}</h2>
        <ul>{newnumber}</ul>
        <ul>{
        num.map((num)=><li>{num}</li>)
        }</ul>
     

      </>
    )
  }
}

export default CFunctionClick