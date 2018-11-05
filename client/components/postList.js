import React, {Component} from 'react'


class PostList extends Component {
  constructor () {
    super()

    this.state = {
      posts: []
    }

    let postsURL = "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_blogpost"
    fetch(postsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        posts: response
      })
    })
    .then(console.log(this.state.posts))
  }

  componentDidMount () {
    console.log(this.state)
  }

  render () {
    let posts = this.state.posts.map((post, index) => {
      return (
        <div className="posts">
                <text className="postTitle">{post.acf.title}</text><br /><text className="postDate">POSTED ON {post.acf.date}</text><hr />
              </div>
      )
    })


    return (
      <div className="postContainer">
        {posts}
              </div>
    )
  }
  }

  export default PostList


//   <div className="posts">
//   <p className="postTitle">Agronomy Courtyard</p>
//   <br />
//   <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
//   <hr />
// </div>
// <div className="posts">
//   <p className="postTitle">
//     College of Agriculture and Life Sciences Student Council
//   </p>
//   <br />
//   <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
//   <hr />
// </div>
// <div className="posts">
//   <p className="postTitle">Mellanie's Intro</p>
//   <br />
//   <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
//   <hr />
// </div>
// <div className="posts">
//   <p className="postTitle">Greetings from just up the road</p>
//   <br />
//   <text className="postDate">POSTED ON DECEMBER 15, 2011</text>
//   <hr />
// </div>
// <div className="buttonPost">
//   <button>view all</button>
// </div>
