import React, { Component } from "react";

class SmallBlogPost extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let postsURL =
      "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_posthome";
    fetch(
      `${"https://cors-anywhere.herokuapp.com/"}https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_posthome`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          posts: response
        });
      });
  }

  render() {
    let posts = this.state.posts.map((post, index) => {
      if (post.acf.video) {
        return (
          <div className="smallblogPost" key={index}>
            <div className="smallBackBox">
              <img
                src="../images/home/blueback.png"
                className="smallblogPostBackground"
              />
              <div className="smallblogPostBox" />
            </div>
            <div className="smallBlogContent">
              <img src={post.acf.contentpic} className="smallblogPhoto" />
              <img src={post.acf.biopic} className="smallAuthor" />
              <img
                src="../images/blogger/numbubble.png"
                className="smallComBub"
              />
              <img src="../images/home/videotag.png" className="videotag" />
              <text className="tealSubHeader">
                POSTED ON {post.acf.date.toUpperCase()}
              </text>
              <br />
              <text className="blueHead">{post.acf.title}</text>
              <text className="goldItalics">by {post.acf.author}</text>
              <div className="smallContent">
                <p className="blackBodyItalics2">
                  {post.acf.content}
                  <a href="#">
                    <text className="readMore">[READ MORE]</text>
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="smallblogPost">
            <div className="smallBackBox">
              <img
                src="../images/home/blogpost.png"
                className="smallblogPostBackground"
              />
              <div className="smallblogPostBox" />
            </div>
            <div className="smallBlogContent">
              <img src={post.acf.contentpic} className="smallblogPhoto" />
              <img src={post.acf.biopic} className="smallAuthor" />
              <img
                src="../images/blogger/numbubble.png"
                className="smallComBub"
              />
              <text className="tealSubHeader">
                POSTED ON {post.acf.date.toUpperCase()}
              </text>
              <br />
              <text className="redHead">{post.acf.title}</text>
              <text className="goldItalics">by {post.acf.author}</text>
              <div className="smallContent">
                <p className="blackBodyItalics2">
                  {post.acf.content}{" "}
                  <a href="#">
                    <text className="readMore">[READ MORE]</text>
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      }
    });

    return <div className="smallBlogContainer">{posts}</div>;
  }
}

export default SmallBlogPost;
