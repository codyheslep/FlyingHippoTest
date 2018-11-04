import React from "react";

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
              <div className="posts">
                <p className="postTitle">The fire is so delightful</p>
                <br />
                <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
                <hr />
              </div>
              <div className="posts">
                <p className="postTitle">Agronomy Courtyard</p>
                <br />
                <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
                <hr />
              </div>
              <div className="posts">
                <p className="postTitle">
                  College of Agriculture and Life Sciences Student Council
                </p>
                <br />
                <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
                <hr />
              </div>
              <div className="posts">
                <p className="postTitle">Mellanie's Intro</p>
                <br />
                <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
                <hr />
              </div>
              <div className="posts">
                <p className="postTitle">Greetings from just up the road</p>
                <br />
                <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
                <hr />
              </div>
              <div className="buttonPost">
                <button>view all</button>
              </div>
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
