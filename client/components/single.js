import React, {Component} from 'react'
import {connect} from 'react-redux'
import Overview from './overview'
import BlogPostSingle from './blogPostSingle'
import Sidebar from './sidebar'


class UserHome extends Component {
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
      <div >
        <Sidebar />
      </div>
    </div>
  )
}
}

export default UserHome
