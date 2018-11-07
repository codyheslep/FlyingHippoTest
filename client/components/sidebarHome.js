import React from "react";
import SmallPics from "./smallPics";

const Sidebar = () => {
  return (
    <div className="sidebarHome">
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
        <div className="latestPosts2">
          <img
            src="../images/blogger/yellow_texture.png"
            className="homePostsContent1"
          />
          <div className="insetShadow" />
          <img
            src="../images/blogger/yellow_texture.png"
            className="homePostsContent2"
          />
        </div>
        <div className="latestPostsContent2">
          <img src="../images/home/signature.png" className="signature" />
          <img src="../images/home/girlsnap.png" className="girlSnap" />
          <a href="#">
            <img src="../images/home/amandabub.png" className="sideBubble" />
          </a>
          <div className="smallPicContainer">
            <SmallPics />
          </div>
        </div>
        <div className="latestVideos2">
          <div className="latestVideosContentBackgroundB" />
          <div className="latestVideosContentBackground2" />
          <img
            src="../images/blogger/tvsidebar.png"
            className="latestVideosContent2"
          />
          <div className="centerText2">
            <text className="blueHeader">
              College of Agriculture and Life Sciences Student Council
            </text>
          </div>
          <div className="smallvideoContainer2">
            <iframe
              className="smallVideo"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <img
            src="../images/blogger/blue_texture.png"
            className="videoLinks"
          />
          <img src="../images/blogger/textlinks.png" className="textLinks" />
          <a href="#">
            <div className="whatDiv2" />
          </a>
          <a href="#">
            <div className="askDiv2" />
          </a>
          <a href="#">
            <div className="liveDiv2" />
          </a>
          <a href="#">
            <div className="joinDiv2" />
          </a>
          <a href="#">
            <div className="subDiv2" />
          </a>
          <text className="copyright2">© 2012 Student Life</text>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
