import React, { Component } from "react";

class BlogPostSingle extends Component {
  constructor() {
    super();

    this.state = {
      blogPost: []
    };
  }

  componentDidMount() {
    let blogPostsURL =
      "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postsingle";
    fetch(
      `${"https://cors-anywhere.herokuapp.com/"}https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postsingle`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          blogPost: response
        });
      })
  }

  render() {
    return (
      <div>
        {this.state &&
          this.state.blogPost[0] && (
            <div className="blogPostLarge">
              <div>
                <img
                  src="../images/single/largeblogback.png"
                  className="blogPostBackgroundLarge"
                />
                <div className="blogPostBoxLarge" />
              </div>
              <img
                src="../images/single/mellanie.png"
                className="blogWriterLarge"
              />
              <img
                src="../images/single/bymel.png"
                className="blogWriterLargeName"
              />
              <div className="blogPostContentLarge">
                <div className="blogTitleLarge">
                  <text className="redHead">
                    {this.state.blogPost[0].acf.title}
                  </text>
                </div>
                <div>
                  <text className="goldDate">
                    {" "}
                    {this.state.blogPost[0].acf.date.toUpperCase()}
                  </text>
                </div>
                <div className="largeBody">
                  <p className="blackBodyItalics">
                    {this.state.blogPost[0].acf.content}
                  </p>
                </div>
                {this.state.blogPost[0].acf.video && (
                  <div className="videoContainer">
                    <iframe
                      className="largeVideo"
                      src={this.state.blogPost[0].acf.video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {this.state.blogPost[0].acf.picture1 && (
                  <div>
                    <img
                      src={this.state.blogPost[0].acf.picture1}
                      className="blogPostPic1"
                    />
                  </div>
                )}
                {this.state.blogPost[0].acf.picture2 && (
                  <div>
                    <img
                      src={this.state.blogPost[0].acf.picture2}
                      className="blogPostPic2"
                    />
                  </div>
                )}
                <div className="largeBody">
                  <p className="blackBodyItalics">
                    {this.state.blogPost[0].acf.content2}
                  </p>
                </div>
              </div>
              <div className="tagContainer2">
                <div>
                  <text className="tagHeader">Categories:</text>
                  <text className="blackBody">
                    {this.state.blogPost[0].acf.categories}
                  </text>
                </div>
                <div>
                  <text className="tagHeader">Tags:</text>
                  <text className="blackBody">
                    {this.state.blogPost[0].acf.tags}
                  </text>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default BlogPostSingle;
