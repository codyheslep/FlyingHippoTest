import React from 'react'
import {connect} from 'react-redux'
import Overview from './overview'
import SmallBlogPost from './smallblogPost'
import SidebarHome from './sidebarHome'


const FbComments= () => {
  return (
    <div className="commentsContainer">
    <img src="../images/single/share.png" className="share"/>
    <img src="../images/single/socialbubble.png" className="socialBubble"/>
    <div className="fbcomments">
    <div class="fb-comments" data-width="100%" data-href="https://www.codyheslep.com" data-numposts="5"></div>
    </div>
    </div>
  )
}

export default FbComments
