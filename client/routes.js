import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {UserHome} from './components'
import {Navbar} from './components'
import {Home} from './components'

class Routes extends Component {
  render() {

    return (
      <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={UserHome} />
        <Route exact path="/home" component={Home} />
      </Switch>
      </div>
    )
  }
}

export default Routes
