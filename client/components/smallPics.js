import React, {Component} from 'react'


class SmallPics extends Component {
  constructor () {
    super()

    this.state = {
      pics: []
    }
  }

  componentDidMount () {
    let postsURL = "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_homepic?per_page=15"
    fetch(postsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        pics: response
      })
    })
    .then(console.log(this.state.pics))
  }

  render () {
    let pictures = this.state.pics.map((pic, index) => {
      return (
      <img src={pic.acf.picture} className="smallPic"/>
      )
    })



    return (
      <div className="picsContainer">
        {pictures}
              </div>
    )
  }
  }

  export default SmallPics
