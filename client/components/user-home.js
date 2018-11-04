import React from 'react'
import {connect} from 'react-redux'
import Overview from './overview'
import BlogPost from './blogPost'
import Sidebar from './sidebar'


const UserHome = () => {
  return (
    <div className="container">
    <div className="logoContainer">
    <img src="../images/blogger/logo.png" className="bloggerLogo"/>
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

export default UserHome
