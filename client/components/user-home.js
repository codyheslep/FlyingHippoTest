import React from 'react'
import {connect} from 'react-redux'
import Overview from './overview'
import BlogPost from './blogPost'


const UserHome = () => {
  return (
    <div className="container">
    <div className="innerContainer">
    <Overview />
    </div>
    <div className="innerContainer">
      <BlogPost />
    </div>
    </div>
  )
}

export default UserHome
