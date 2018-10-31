import React from 'react'


const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarContainer">
      <div className="latestPosts">
        <div className="sidebarHeader">
        <text>LATEST POSTS FROM</text>
        <text>MELLANIE</text>
        </div>
        <div className="latestPostsContent">
        <div className="posts">
          <text>sample post</text>
          <br/>
          <text>date posted</text>
          <hr/>
          <text>sample post</text>
          <br/>
          <text>date posted</text>
          <hr/>
          <text>sample post</text>
          <br/>
          <text>date posted</text>
          <hr/>
          <text>sample post</text>
          <br/>
          <text>date posted</text>
          <hr/>
          <text>sample post</text>
          <br/>
          <text>date posted</text>
          <hr/>
          <button/>
          </div>
          <img src="../images/yellow_texture.png" className="latestPostsContentBackground" />
        </div>
      </div>
      <div className="latestVideos">
        <div className="sidebarHeader" >
        <text>Latest Videos by</text>
        <text>Mellanie</text>
        </div>
        <div>
        <div className="latestVideosContentBackground"/>
          <img src="../images/tv_sketch.png" className="latestVideosContent" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
