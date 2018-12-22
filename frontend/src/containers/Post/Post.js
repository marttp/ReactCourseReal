import React, { Component } from 'react'
import { MyPosts } from '../../components';


const posts = [
  {
    id: 1,
    name: 'Mart',
    body: 'Hello World'
  },
  {
    id: 2,
    name: 'Mart',
    body: 'Hello World'
  },
  {
    id: 3,
    name: 'Mart',
    body: 'Hello World'
  }
]

class Post extends Component {
  render() {
    return (
      <div>
        <MyPosts myPosts={posts}/>
      </div>
    )
  }
}

export default Post
