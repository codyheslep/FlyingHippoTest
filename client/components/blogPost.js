import React from 'react'

const BlogPost = () => {
  return (
    <div className="blogPost">
    <div >
    <img src="../images/post_background.png" className="blogPostBackground" />
    <div className="blogPostBox">
    </div>
    </div>
    <div className="blogPostContent">
    <div>
      <text className="tealSubHeader">POSTED ON DECEMBER 12, 2011</text>
    </div >
    <div>
      <text className="redHead">The Fire is so Delightful</text>
      <text className="goldItalics">by Mellanie</text>
    </div>
    <div>
      <p className="blackBodyItalics">Lorem Ipsum odores quatro. Like many people, I get distracted easily and require the occasional study break! At least I was able to be productive during this one. Lorem Ipsum odores quatro. Like many people, I get distracted easily and require the occasional study break! At least I was able to be productive during this one.</p>
    </div>
    <div className="videoContainer">
    <iframe className="largeVideo" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
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
  )
}

export default BlogPost
