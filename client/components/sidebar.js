import React from "react";
import PostList from './postList'

const Sidebar = () => {
  return (
    <div className="sidebar">
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
            <div className="postContainer">
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
