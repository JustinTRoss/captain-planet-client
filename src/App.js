// @flow

import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import cookie from 'react-cookies'

import Home from './screens/Public'
import Login from './screens/Entrance'

class App extends Component {
  constructor(props) {
    super(props)

    const isAuthed = cookie.load('user')
    if (!isAuthed) {
      window.location = 'http://localhost:3001/login'
    }
  }
  render() {
    return (
      <div
        className="app"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#E2FCEF'
        }}
      >
        <div style={{ flex: 1 }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/login" exact component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
