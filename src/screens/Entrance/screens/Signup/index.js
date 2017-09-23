/*
* @Author: Justin Ross
* @Date:   2017-03-30 11:17:39
* @Last Modified by:   Justin Ross
* @Last Modified time: 2017-04-14 12:21:30
*/

import React, { PropTypes } from 'react'
import { Header, Form, Input, Icon, Button } from 'semantic-ui-react'

const Signup = ({
  fields: { signupUser, signupPass, signupEmail },
  handleFieldUpdate,
  handleSubmit
}) =>
  <div>
    <Header size="huge">Signup</Header>
    <Form onSubmit={handleSubmit} name="signup">
      <Form.Field>
        <Input
          name="signupUser"
          type="username"
          value={signupUser}
          iconPosition="left"
          placeholder="Username"
          onChange={handleFieldUpdate}
        >
          <Icon name="user" />
          <input />
        </Input>
      </Form.Field>
      <Form.Field>
        <Input
          name="signupEmail"
          type="email"
          value={signupEmail}
          iconPosition="left"
          placeholder="Email"
          onChange={handleFieldUpdate}
        >
          <Icon name="mail" />
          <input />
        </Input>
      </Form.Field>
      <Form.Field>
        <Input
          name="signupPass"
          type="password"
          value={signupPass}
          iconPosition="left"
          placeholder="Password"
          onChange={handleFieldUpdate}
        >
          <Icon name="lock" />
          <input />
        </Input>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  </div>

Signup.propTypes = {
  fields: PropTypes.shape({
    signupUser: PropTypes.string.isRequired,
    signupPass: PropTypes.string.isRequired,
    signupEmail: PropTypes.string.isRequired
  }).isRequired,
  handleFieldUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Signup
