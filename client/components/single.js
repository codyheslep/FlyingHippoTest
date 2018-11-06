import React, {Component} from 'react'
import {connect} from 'react-redux'
import Overview from './overview'
import BlogPostSingle from './blogPostSingle'
import SidebarSingle from './sidebarSingle'
import FbComments from './fbcomments'


class Single extends Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render() {
  return (
    <div className="container">
      <div className="logoContainer">
      <img src="../images/home/logo.png" className="homeLogo"/>
      </div>
      <div className="innerContainer">
        <BlogPostSingle />
      </div>
      <div className="innerContainer">
       <FbComments />
      </div>
      <div >
        <SidebarSingle />
      </div>
    </div>
  )
}
}

export default Single
