import React from "react";
import PostListAll from "./postListAll";
import PostList from "./postList";

const SidebarSingle = () => {
  return (
    <div className="sidebar2">
      <div className="searchButton">
        <a href="#">
          <img src="../images/blogger/searchicon.png" className="searchIcon" />
        </a>
      </div>
      <div>
        <a href="#">
          <img src="../images/blogger/search.png" className="search" />
        </a>
        <a href="#">
          <img src="../images/blogger/castbutton.png" className="castButton" />
        </a>
        <a href="#">
          <img
            src="../images/blogger/videosbutton.png"
            className="videosButton"
          />
        </a>
        <a href="#">
          <img
            src="../images/blogger/topicsbutton.png"
            className="topicsButton"
          />
        </a>
        <a href="#">
          <img
            src="../images/blogger/archivesbutton.png"
            className="archivesButton"
          />
        </a>
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
              <a href="#">
                <button className="viewAllButton">view all</button>
              </a>
            </div>
          </div>
        </div>
        <div className="latestVideos">
          <div className="sidebarHeader">
            <text className="postHead">LATEST POSTS</text>
          </div>
          <div className="latestVideosContentBackgroundC" />
          <div className="latestVideosContentBackground3" />
          <PostListAll />
          <a href="#">
            <button className="viewAllButton2">view all</button>
          </a>
          <img
            src="../images/blogger/blue_texture.png"
            className="videoLinks2"
          />
          <img src="../images/blogger/textlinks.png" className="textLinks2" />
          <a href="#">
            <div className="whatDiv3" />
          </a>
          <a href="#">
            <div className="askDiv3" />
          </a>
          <a href="#">
            <div className="liveDiv3" />
          </a>
          <a href="#">
            <div className="joinDiv3" />
          </a>
          <a href="#">
            <div className="subDiv3" />
          </a>
          <text className="copyright3">© 2012 Student Life</text>
        </div>
      </div>
    </div>
  );
};

export default SidebarSingle;
