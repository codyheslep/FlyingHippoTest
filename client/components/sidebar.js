import React from "react";
import PostList from './postList'

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="searchButton">
    <img src="../images/blogger/searchicon.png" className="searchIcon"/>
    </div>
    <div>
    <img src="../images/blogger/search.png" className="search"/>
    <img src="../images/blogger/castbutton.png" className="castButton"/>
    <img src="../images/blogger/videosbutton.png" className="videosButton"/>
    <img src="../images/blogger/topicsbutton.png" className="topicsButton"/>
    <img src="../images/blogger/archivesbutton.png" className="archivesButton"/>
    </div>
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
            <div className="latestVideosContentBackground" />
            <img
              src="../images/blogger/tvsidebar.png"
              className="latestVideosContent"
            />
             <div className="smallvideoContainer">
            <iframe className="smallVideo" src="https://www.youtube.com/embed/dQw4w9WgXcQ"frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
            <img
              src="../images/blogger/blue_texture.png"
              className="videoLinks"
            />
            <img
              src="../images/blogger/textlinks.png"
              className="textLinks"
            />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
