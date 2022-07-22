import React from "react";

class CHeader extends React.Component
{
    render(){
        return (
            <div>
                <h1>This is the use of class Components</h1>
                <h1>Hello {this.props.name}-{this.props.last}</h1>
            </div>        
        )
    }
}
export default CHeader;