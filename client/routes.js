import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {Blogger} from './components'
import {Navbar} from './components'
import {Home} from './components'
import {Single} from './components'

class Routes extends Component {
  render() {

    return (
      <div>
      <Switch>
        <Route exact path="/" component={Blogger} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/single" component={Single} />
      </Switch>
      </div>
    )
  }
}

export default Routes
