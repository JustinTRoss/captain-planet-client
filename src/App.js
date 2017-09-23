// @flow

import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from './screens/Public'


const App = () => (
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
      </Switch>
    </div>
  </div>
)

export default App
