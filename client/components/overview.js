import React, { Component } from "react";
import DOMPurify from "dompurify";

class Overview extends Component {
  constructor() {
    super();

    this.state = {
      student: []
    };
  }

  componentDidMount() {
    let studentsURL =
      "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_user";
    fetch(
      `${"https://cors-anywhere.herokuapp.com/"}https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_user`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          student: response
        });
      });
  }

  render() {
    return (
      <div>
        {this.state &&
          this.state.student[0] && (
            <div className="overview">
              <img
                src="../images/blogger/crazy_mary.png"
                className="overviewImage"
              />
              <img
                src="../images/blogger/bubble1.png"
                className="overviewBubble1"
              />
              <img
                src="../images/blogger/bubble2.png"
                className="overviewBubble2"
              />
              <img
                src="../images/blogger/bubble3.png"
                className="overviewBubble3"
              />
              <div className="overviewBox">
                <div className="overviewHeader">
                  <div className="headText">
                    <text className="redHead">
                      {this.state.student[0].acf.name.toUpperCase()}
                    </text>
                  </div>
                </div>
                <div className="subheadText">
                  <div className="tealSubHeader">
                    <text>{this.state.student[0].acf.class.toUpperCase()}</text>
                    <br />
                    <text>
                      FROM {this.state.student[0].acf.hometown.toUpperCase()}
                    </text>
                  </div>
                </div>
                <div className="overviewBody">
                  <div
                    className="blackBody"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        this.state.student[0].acf.description
                      )
                    }}
                  />
                </div>
                <div className="overviewSocialMedia">
                  <a href="#">
                    <img
                      src="../images/blogger/twitter.png"
                      className="twitter"
                    />
                  </a>
                  <a href="#">
                    <img src="../images/blogger/rss.png" className="rss" />
                  </a>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Overview;
