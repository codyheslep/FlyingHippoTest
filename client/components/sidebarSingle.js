import React from "react";
import PostListAll from './postListAll'
import PostList from './postList'

const SidebarSingle = () => {
  return (
    <div className="sidebar2">
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
            <button className="viewAllButton">view all</button>
            </div>
          </div>
        </div>
        <div className="latestVideos">
          <div className="sidebarHeader">
            <text className="postHead">LATEST POSTS</text>
          </div>
            <div className="latestVideosContentBackground2" />
            <PostListAll />
            <button className="viewAllButton2">view all</button>
            <img
              src="../images/blogger/blue_texture.png"
              className="videoLinks2"
            />
            <img
              src="../images/blogger/textlinks.png"
              className="textLinks2"
            />
            <text className="copyright2">© 2012 Student Life</text>
        </div>
      </div>
    </div>
  );
};

export default SidebarSingle;
