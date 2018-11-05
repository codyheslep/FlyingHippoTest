import React, {Component} from 'react'

class BlogPost extends Component {
  constructor () {
    super()

    this.state = {
      blogPost: []
    }
    let blogPostsURL = "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_blogpost"
    fetch(blogPostsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        blogPost: response
      })
    })
    .then(console.log(this.state.blogPost))
  }

  componentDidMount () {
    console.log(this.state)
  }

  render() {
    return (
      <div>
      { this.state && this.state.blogPost[0] &&
      <div className="blogPost">
        <div >
          <img src="../images/blogger/post_background.png" className="blogPostBackground" />
          <div className="blogPostBox">
          </div>
        </div>
        <div className="blogPostContent">
          <div>
            <text className="tealSubHeader">POSTED ON {this.state.blogPost[0].acf.date.toUpperCase()}</text>
          </div >
          <div>
            <text className="redHead">{this.state.blogPost[0].title.rendered}</text>
            <text className="goldItalics">by {this.state.blogPost[0].acf.author}</text>
          </div>
          <div>
            <p className="blackBodyItalics">{this.state.blogPost[0].content.rendered}</p>
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
        </div>
        <div className="tagContainer">
          <div>
            <text className="tagHeader">Categories:</text>
            <text className="blackBody">Christmas, ISU, Social Life, Videos</text>
          </div>
          <div>
            <text className="tagHeader">Tags:</text>
            <text className="blackBody">Admissions, lorem ipsum, cyclones, iowa state university, ISU</text>
          </div>
        </div>
      </div>
      }
      </div>
    )
  }
}

export default BlogPost
