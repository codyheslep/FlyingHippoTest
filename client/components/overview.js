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
    <img src="../images/blogger/crazy_mary.png" className="overviewImage" />
    <img src="../images/blogger/bubble1.png" className="overviewBubble1" />
    <img src="../images/blogger/bubble2.png" className="overviewBubble2" />
    <img src="../images/blogger/bubble3.png" className="overviewBubble3" />
    <div className="overviewBox">
      <div className="overviewHeader">
      <text className="redHead">{student.name}</text>
      </div>
      <div className="tealSubHeader">
      <text>{student.class}<br/></text>
      <text>FROM {student.location}</text>
      </div>
      <div className="overviewBody">
      <p className="blackBody">{student.descriptionA}</p>
      <p className="blackBody">{student.descriptionB}</p>
      <p className="blackBody">{student.descriptionC}</p>
      </div>
      <div className="overviewSocialMedia">
      <text>links here</text>
      </div>
    </div>
    </div>
  )
}

export default Overview
