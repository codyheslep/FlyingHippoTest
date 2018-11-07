import React from "react";
import SmallBlogPost from "./smallblogPost";
import SidebarHome from "./sidebarHome";

const Home = () => {
  return (
    <div className="container2">
      <div className="logoContainer">
        <img src="../images/home/logo.png" className="homeLogo" />
        <img src="../images/home/recentposts.png" className="recentPosts" />
      </div>
      <div className="innerContainer">
        <SmallBlogPost />
        <a href="#">
          <button className="olderButton">older posts</button>
        </a>
      </div>
      <div>
        <SidebarHome />
      </div>
    </div>
  );
};

export default Home;
