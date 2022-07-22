import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Jerry"
      }
      console.log("LifeCyleA: Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCyleA: getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCyleA: componentDidMount")
    }
  render() {
    console.log("LifeCyleA: Render")
    return (
      <div>LifeCycleA
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA