import React, {Component} from 'react'


class PostListAll extends Component {
  constructor () {
    super()

    this.state = {
      posts: []
    }

    let postsURL = "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postsingle"
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
    let posts = this.state.posts.map((post, index) => { if(index !== 0){
      return (
        <div className="posts">
                <text className="postTitle2">{post.acf.title}</text><br /><text className="postAuthor2">by {post.acf.author},</text><text className="postDate2">{post.acf.date.toUpperCase()}</text><hr />
              </div>
      )
    }
    })


    return (
      <div className="postContainer2">
        {posts}
              </div>
    )
  }
  }

  export default PostListAll
