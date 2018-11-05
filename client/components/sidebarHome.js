import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="latestPosts">
          <img
            src="../images/blogger/yellow_texture.png"
            className="latestPostsContentBackground"
          />
        </div>
        <div className="latestPostsContent" />
        <div className="latestVideos">
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
