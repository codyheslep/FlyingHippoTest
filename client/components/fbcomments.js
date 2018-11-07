import React from "react";

const FbComments = () => {
  return (
    <div className="commentsContainer">
      <img src="../images/single/share.png" className="share" />
      <img src="../images/single/socialbubble.png" className="socialBubble" />
      <div className="socialButtons">
      <img src="../images/single/sendbut.png" className="socialSend" />
      <img src="../images/single/tweetbut.png" className="socialTweet" />
      <img src="../images/single/plusbut.png" className="socialPlus" />
      <img src="../images/single/pinbut.png" className="socialPin" />
      </div>
      <div className="fbcomments">
        <div
          class="fb-comments"
          data-href="https://fh-testproject-heslep.herokuapp.com/single"
          data-numposts="5"
          data-width="100%"
        />
      </div>
    </div>
  );
};

export default FbComments;
