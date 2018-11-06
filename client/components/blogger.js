import React, {Component} from 'react'
import {connect} from 'react-redux'
import Overview from './overview'
import BlogPost from './blogPost'
import Sidebar from './sidebar'


class Blogger extends Component {
  constructor () {
    super()

    this.state = {
      blogPosts: []
    }
  }

  // componentDidMount () {
  //   let blogPostsURL = "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_blogpost"
  //   fetch(blogPostsURL)
  //   .then(response => response.json())
  //   .then(response => {
  //     this.setState({
  //       blogPosts: response
  //     })
  //   })
  // }

  render() {
    // let blogPosts = this.state.blogPosts.map((post, index) => {
    //   return (
    //     <div key={index}>
    //     {post.acf.date}
    //     </div>
    //   )
    // })
  return (
    <div className="container">
      <div className="logoContainer">
        <img src="../images/blogger/logo.png" className="bloggerLogo" />
      </div>
      <div className="innerContainer">
        <Overview />
      </div>
      <div className="innerContainer">
        <BlogPost />
      </div>
      <div >
        <Sidebar />
      </div>
    </div>
  )
}
}

export default Blogger
