import React from "react";
import PostList from './postList'

const Sidebar = () => {
  return (
    <div className="sidebar">
    <img src="../images/blogger/castbutton.png" className="castButton"/>
    <img src="../images/blogger/videosbutton.png" className="videosButton"/>
    <img src="../images/blogger/topicsbutton.png" className="topicsButton"/>
    <img src="../images/blogger/archivesbutton.png" className="archivesButton"/>
      <div className="sidebarContainer">
        <div className="latestPosts">
          <div className="sidebarHeader">
            <text className="postHead">LATEST POSTS FROM</text>
            <text className="postAuthor">MELLANIE</text>
          </div>
          <img
            src="../images/blogger/yellow_texture.png"
            className="latestPostsContentBackground"
          />
          <div className="latestPostsContent">
            <div>
            <PostList />
            </div>
          </div>
        </div>
        <div className="latestVideos">
          <div className="sidebarHeader">
            <text className="postHead">LATEST VIDEOS FROM</text>
            <text className="postAuthor">MELLANIE</text>
          </div>
          <div>
            <div className="latestVideosContentBackground" />
            <img
              src="../images//blogger/tv_sketch.png"
              className="latestVideosContent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
