/*
* @Author: Justin Ross
* @Date:   2017-03-30 11:17:39
* @Last Modified by:   Justin Ross
* @Last Modified time: 2017-04-14 12:15:22
*/
import React, { PropTypes } from 'react'
import { Header, Form, Input, Icon, Button } from 'semantic-ui-react'

const Login = ({
  fields: { loginUser, loginPass },
  handleFieldUpdate,
  handleSubmit
}) =>
  <div>
    <Header size="huge">Login</Header>
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          name="loginUser"
          value={loginUser}
          type="username"
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
          name="loginPass"
          value={loginPass}
          type="password"
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

Login.propTypes = {
  fields: PropTypes.shape({
    loginUser: PropTypes.string,
    loginPass: PropTypes.string
  }).isRequired,
  handleFieldUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Login
