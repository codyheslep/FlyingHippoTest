import React, { Component } from "react";

class SmallPics extends Component {
  constructor() {
    super();

    this.state = {
      pics: []
    };
  }

  componentDidMount() {
    let postsURL =
      "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_homepic?per_page=15";
    fetch(
      `${"https://cors-anywhere.herokuapp.com/"}https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_homepic?per_page=15`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          pics: response
        });
      });
  }

  render() {
    let pictures = this.state.pics.map((pic, index) => {
      return (
        <a href="#">
          <img src={pic.acf.picture} className="smallPic" key={index} />
        </a>
      );
    });

    return <div className="picsContainer">{pictures}</div>;
  }
}

export default SmallPics;
