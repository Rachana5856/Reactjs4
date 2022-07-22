import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response=>{
            this.setState({posts:response.data})
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
  render() {
    const {posts}=this.state
    return (
      <div>PostList
        {
            posts.map(post=><div key={post.id}>{post.email}</div>)
        }
      </div>
    )
  }
}

export default PostList