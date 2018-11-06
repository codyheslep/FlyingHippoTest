import React, {Component} from 'react'
import {connect} from 'react-redux'
import Overview from './overview'
import BlogPostSingle from './blogPostSingle'
import Sidebar from './sidebar'


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
        <div class="fb-comments" data-href="https://www.codyheslep.com" data-numposts="5"></div>
      </div>
      <div >
        <Sidebar />
      </div>
    </div>
  )
}
}

export default Single
