import React, { Component } from "react";

class SmallBlogPost extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    let postsURL =
      "https://www.pushpinsandfabriccorkboards.com/wp-json/wp/v2/fh_posthome";
    fetch(postsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          posts: response
        });
      })
      .then(console.log(this.state.posts));
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    let posts = this.state.posts.map((post, index) => {
      if (post.acf.video) {
        return (
          <div className="smallblogPost">
            <div className="smallBackBox">
              <img
                src="../images/home/blueback.png"
                className="smallblogPostBackground"
              />
              <div className="smallblogPostBox" />
            </div>
            <div className="smallBlogContent">
            <img
                src={post.acf.contentpic}
                className="smallblogPhoto"
              />
                <text className="tealSubHeader">
                  POSTED ON {post.acf.date.toUpperCase()}
                </text><br/>
                <text className="redHead">{post.acf.title}</text>
                <text className="goldItalics">by {post.acf.author}</text>
              <div className="smallContent">
                <p className="blackBodyItalics2">
                {post.acf.content}
                </p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
              <div className="smallblogPost">
            <div className="smallBackBox">
            <img
                src="../images/home/blogpost.png"
                className="smallblogPostBackground"
              />
              <div className="smallblogPostBox" />
            </div>
            <div className="smallBlogContent">
            <img
                src={post.acf.contentpic}
                className="smallblogPhoto"
              />
                <text className="tealSubHeader">
                  POSTED ON {post.acf.date.toUpperCase()}
                </text><br/>
                <text className="redHead">{post.acf.title}</text>
                <text className="goldItalics">by {post.acf.author}</text>
              <div className="smallContent">
                <p className="blackBodyItalics2">
                {post.acf.content}
                </p>
              </div>
            </div>
          </div>
        );
      }
    });

    return <div className="smallBlogContainer">{posts}</div>;
  }
}

export default SmallBlogPost;

// import React from "react";

// const SmallBlogPost = () => {
//   return (
//     <div>
//     <div className="smallblogPost">
//       <div>
//         <img
//           src="../images/home/blogpost.png"
//           className="smallblogPostBackground"
//         />
//         <div className="smallblogPostBox" />
//       </div>
//       <div className="smallblogPostContent">
//       <div className="smallblogPhotoContainer" >
//       <img
//           src="../images/home/blogpic.png" className="smallblogPhoto"
//         />
//         </div>
//         <div>
//           <text className="tealSubHeader">POSTED ON DECEMBER 12, 2011</text>
//         </div>
//         <div>
//           <text className="redHead">The Fire is so Delightful</text>
//           <text className="goldItalics">by Mellanie</text>
//         </div>
//         <div className="textwithPic">
//           <p className="blackBodyItalics">
//             Lorem Ipsum odores quatro. Like many people, I get distracted easily
//             and require the occasional study break! At least I was able to be
//             productive during this one. Lorem Ipsum odores quatro. Like many
//             people, I get distracted easily and require the occasional study
//             break! At least I was able to be productive during this one.
//           </p>
//         </div>
//       </div>
//       </div>
//       <div className="smallblogPost">
//       <div>
//         <img
//           src="../images/home/blogpost.png"
//           className="smallblogPostBackground"
//         />
//         <div className="smallblogPostBox" />
//       </div>
//       <div className="smallblogPostContent">
//         <div>
//           <text className="tealSubHeader">POSTED ON DECEMBER 12, 2011</text>
//         </div>
//         <div>
//           <text className="redHead">The Fire is so Delightful</text>
//           <text className="goldItalics">by Mellanie</text>
//         </div>
//         <div>
//           <p className="blackBodyItalics">
//             Lorem Ipsum odores quatro. Like many people, I get distracted easily
//             and require the occasional study break! At least I was able to be
//             productive during this one. Lorem Ipsum odores quatro. Like many
//             people, I get distracted easily and require the occasional study
//             break! At least I was able to be productive during this one.
//           </p>
//         </div>
//       </div>
//       </div>
//
//       <div className="smallblogPost">
//       <div>
//         <img
//           src="../images/home/blogpost.png"
//           className="smallblogPostBackground"
//         />
//         <div className="smallblogPostBox" />
//       </div>
//       <div className="smallblogPostContent">
//       <div className="smallblogPhotoContainer" >
//       <img
//           src="../images/home/blogpic.png" className="smallblogPhoto"
//         />
//         </div>
//         <div>
//           <text className="tealSubHeader">POSTED ON DECEMBER 12, 2011</text>
//         </div>
//         <div>
//           <text className="redHead">The Fire is so Delightful</text>
//           <text className="goldItalics">by Mellanie</text>
//         </div>
//         <div className="textwithPic">
//           <p className="blackBodyItalics">
//             Lorem Ipsum odores quatro. Like many people, I get distracted easily
//             and require the occasional study break! At least I was able to be
//             productive during this one. Lorem Ipsum odores quatro. Like many
//             people, I get distracted easily and require the occasional study
//             break! At least I was able to be productive during this one.
//           </p>
//         </div>
//       </div>
//       </div>
//       <div className="smallblogPost">
//       <div>
//         <img
//           src="../images/home/blogpost.png"
//           className="smallblogPostBackground"
//         />
//         <div className="smallblogPostBox" />
//       </div>
//       <div className="smallblogPostContent">
//       <div className="smallblogPhotoContainer" >
//       <img
//           src="../images/home/blogpic.png" className="smallblogPhoto"
//         />
//         </div>

//         <div>
//           <text className="tealSubHeader">POSTED ON DECEMBER 12, 2011</text>
//         </div>
//         <div>
//           <text className="redHead">The Fire is so Delightful</text>
//           <text className="goldItalics">by Mellanie</text>
//         </div>
//         <div className="textwithPic">
//           <p className="blackBodyItalics">
//             Lorem Ipsum odores quatro. Like many people, I get distracted easily
//             and require the occasional study break! At least I was able to be
//             productive during this one. Lorem Ipsum odores quatro. Like many
//             people, I get distracted easily and require the occasional study
//             break! At least I was able to be productive during this one.
//           </p>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default SmallBlogPost;
