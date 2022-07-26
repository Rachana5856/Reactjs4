import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ProductId:'',
         qty:0
      }
    }
    addToCart=(pid)=>{
        this.setState({
            ProductId:pid,
            qty:this.state.qty+1
        })
    }


  render() {
    return (
      <div>
        <button onClick={()=>{this.addToCart(1)}}>Add To Cart</button>
        <Cart ProductId={this.state.ProductId} qty={this.state.qty}></Cart></div>
    )
  }
}

export default Product


class Cart extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         qty:this.props.qty
      }
    }

   /* QuantityInc=()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }*/

    static getDerivedStateFromProps(props,state){
        console.log(props.qty);
        console.log(state.qty);
        if(props.qty !== state.qty){
            return {qty : props.qty}
        }
        return null
    }

    componentDidMount(){
        console.log("Mount method called after Render")
    }

    componentDidUpdate(prevprops, prevstate)
    {
        console.log("Componenet is Updated")
    }

    
  render() {
    return (
      <div>
        <h1>Cart:{this.state.qty}</h1>
        <button onClick={this.QuantityInc}>Update Quantity</button>
      </div>
    )
  }
}