import React, {Component} from 'react'

class BlogPostSingle extends Component {
  constructor () {
    super()

    this.state = {
      blogPost: []
    }
  }

  componentDidMount () {
    let blogPostsURL = "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postsingle"
    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postsingle`)
    .then(response => response.json())
    .then(response => {
      this.setState({
        blogPost: response
      })
    })
    .then(console.log(this.state.blogPost))
  }

  render() {
    return (
      <div>
      { this.state && this.state.blogPost[0] &&
      <div className="blogPostLarge">
        <div >
          <img src="../images/blogger/largeblogback.png" className="blogPostBackgroundLarge" />
          <div className="blogPostBoxLarge"/>
        </div>
        <img
              src="../images/blogger/blogwriter.png"
              className="blogWriterLarge"
            />
        <div className="blogPostContentLarge">
          <div>
            <text className="goldDate"> {this.state.blogPost[0].acf.date.toUpperCase()}</text>
          </div >
          <div className="blogTitle">
            <text className="redHead">{this.state.blogPost[0].acf.title}</text>
            <text className="goldItalics">by {this.state.blogPost[0].acf.author.toUpperCase()}</text>
          </div>
          <div>
            <p className="blackBodyItalics">{this.state.blogPost[0].acf.content}</p>
          </div>
          {this.state.blogPost[0].acf.video &&
          <div className="videoContainer">
            <iframe className="largeVideo" src={this.state.blogPost[0].acf.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          }
          {this.state.blogPost[0].acf.picture1 &&
          <div className="videoContainer">
          <img src={this.state.blogPost[0].acf.picture1} className="blogPostBackground" />
          </div>
          }
          {this.state.blogPost[0].acf.picture2 &&
          <div className="videoContainer">
          <img src={this.state.blogPost[0].acf.picture2} className="blogPostBackground" />
          </div>
          }
        </div>
        <div className="tagContainer">
          <div>
            <text className="tagHeader">Categories:</text>
            <text className="blackBody">{this.state.blogPost[0].acf.categories}</text>
          </div>
          <div>
            <text className="tagHeader">Tags:</text>
            <text className="blackBody">{this.state.blogPost[0].acf.tags}</text>
          </div>
        </div>
      </div>
      }
      </div>
    )
  }
}

export default BlogPostSingle
