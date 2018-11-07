import React, { Component } from "react";

class PostList extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let postsURL =
      "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postblogger";
    fetch(
      `${"https://cors-anywhere.herokuapp.com/"}https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postblogger`
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
      return (
        <div className="posts" key={index}>
          <text className="postTitle">{post.acf.title}</text>
          {post.acf.video && (
            <img src="../images/blogger/movie.png" className="movieSide" />
          )}
          <br />
          <text className="postDate">
            POSTED ON {post.acf.date.toUpperCase()}
          </text>
          <hr />
        </div>
      );
    });

    return <div className="postContainer">{posts}</div>;
  }
}

export default PostList;
