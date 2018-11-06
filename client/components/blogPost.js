import React, {Component} from 'react'

class BlogPost extends Component {
  constructor () {
    super()

    this.state = {
      blogPost: []
    }
  }

  componentDidMount () {
    let blogPostsURL = "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postblogger"
    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_postblogger`)
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
      <div className="blogPost">
        <div >
          <img src="../images/blogger/post_background.png" className="blogPostBackground" />
          <div className="blogPostBox"/>
        </div>
        <img
              src="../images/blogger/blogwriter.png"
              className="blogWriter"
            />
        <div className="blogPostContent">
        <img
              src="../images/blogger/numbubble.png"
              className="numBubble"
            />
          <div>
            <text className="tealSubHeaderPost">POSTED ON {this.state.blogPost[0].acf.date.toUpperCase()}</text>
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
          {this.state.blogPost[0].acf.image &&
          <div className="videoContainer">
          <img src={this.state.blogPost[0].acf.image} className="blogPostBackground" />
          </div>
          }
          {this.state.blogPost[0].acf.image2 &&
          <div className="videoContainer">
          <img src={this.state.blogPost[0].acf.image} className="blogPostBackground" />
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

export default BlogPost

