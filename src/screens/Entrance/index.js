// @flow

import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Login from './screens/Login'
import Signup from './screens/Signup'

class EntranceContainer extends Component {
  state = {
    signupUser: '',
    signupEmail: '',
    signupPass: '',
    loginUser: '',
    loginPass: ''
  }

  handleFieldUpdate = (
    e: SyntheticKeyboardEvent & {
      target: HTMLInputElement & {
        name: string,
        value: string
      }
    }
  ) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  handleSubmit = (
    e: SyntheticKeyboardEvent & {
      target: HTMLInputElement & {
        name: string
      }
    }
  ) => {
    e.preventDefault()
    const { name } = e.target
    if (name === 'signup') {
      const { signupUser, signupEmail, signupPass } = this.state
      console.log(signupUser, signupEmail, signupPass)
    }
  }

  render() {
    const {
      signupUser,
      signupEmail,
      signupPass,
      loginUser,
      loginPass
    } = this.state

    return (
      <Container as={Grid} style={{ marginTop: '200px' }}>
        <Grid.Column width={8}>
          <Signup
            fields={{ signupUser, signupEmail, signupPass }}
            handleFieldUpdate={this.handleFieldUpdate}
            handleSubmit={this.handleSubmit}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Login
            fields={{ loginUser, loginPass }}
            handleFieldUpdate={this.handleFieldUpdate}
            handleSubmit={this.handleSubmit}
          />
        </Grid.Column>
      </Container>
    )
  }
}

export default EntranceContainer
