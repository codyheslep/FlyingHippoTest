import React from 'react'
import {connect} from 'react-redux'

let student = {
  name: 'MELLANIE',
  class: 'JUNIOR',
  location: 'SOUTH LAKE, MISSISSIPPI',
  descriptionA: 'Curabitur pellentesque porta dolor, a tristique nisi consectetur sed. Pellentesques lacinia nisi u lebero dictum egestas. Aliquam a velit mauris, quis congue lacus.',
  descriptionB: 'Phasellus fermentum risus non est posuere adipiscing. Nulla tincidunt consequat dui, at pulvinar quam mollis eu.',
  descriptionC: 'Quisque elementum, sem vel porta tincidunt, nibh nisi eleifend nunc, at placera ferm tum.'
}

const Overview = () => {
  return (
    <div className="overview">
    <img src="../images/crazy_mary.png" className="overviewImage" />
    <img src="../images/bubble1.png" className="overviewBubble1" />
    <img src="../images/bubble2.png" className="overviewBubble2" />
    <img src="../images/bubble3.png" className="overviewBubble3" />
    <div className="overviewBox">
      <div className="overviewHeader">
      <text>{student.name}</text>
      </div>
      <div className="overviewSubHeader">
      <text>{student.class}<br/></text>
      <text>FROM {student.location}</text>
      </div>
      <div className="overviewBody">
      <p>{student.descriptionA}</p>
      <p>{student.descriptionB}</p>
      <p>{student.descriptionC}</p>
      </div>
      <div className="overviewSocialMedia">
      <text>links here</text>
      </div>
    </div>
    </div>
  )
}

export default Overview
