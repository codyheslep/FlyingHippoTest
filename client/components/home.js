import React from 'react'
import {connect} from 'react-redux'
import Overview from './overview'
import SmallBlogPost from './smallblogPost'
import SidebarHome from './sidebarHome'


const Home = () => {
  return (
    <div className="container">
    <div className="logoContainer">
    <img src="../images/home/logo.png" className="homeLogo"/>
    </div>
    <div className="innerContainer">
      <SmallBlogPost />
    </div>
    <div >
      <SidebarHome />
    </div>
    </div>
  )
}

export default Home
