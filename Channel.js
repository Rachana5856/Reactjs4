import React from "react";

class Channel extends React.Component{
    constructor(){
        super();
        this.state={
            msg:"Welcome to Set State of Reactjs"
        }
    }

    Set(){
        this.setState({
            msg:"Thank you.It was great understansing state and set state"
        })
    }



    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <button onClick={()=>{this.Set()}}>Set You Value</button>
            </div>
        )
    }
}

export default Channel;