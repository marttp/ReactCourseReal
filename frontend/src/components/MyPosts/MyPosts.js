import React, { Component } from 'react'
import MyPost from './MyPost/MyPost'

// import { connect } from 'react-redux'
// import * as actionCreator from '../../redux/actions'

class MyPosts extends Component {
  
  // handlerOnDeletePost = (event, id) => {
  //   event.preventDefault()
  //   this.props.onDeletePost(id)
  // }

  render() {
    const data = [...this.props.myPosts]
    let myPosts = null
    if (data.length > 0) {
      myPosts = data.map(post => (
        <MyPost
          key={post.id}
          data={post}
          // onDeletePost={this.handlerOnDeletePost}
        />
      ))
    }

    return <React.Fragment>{myPosts}</React.Fragment>
  }
}

export default MyPosts
