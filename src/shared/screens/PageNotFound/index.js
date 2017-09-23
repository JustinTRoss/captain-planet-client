/*
* @Author: Justin Ross
* @Date:   2017-07-23 11:15:00
* @Last Modified by:   Justin Ross
* @Last Modified time: 2017-08-07 09:46:30
*/

import React from 'react'
import { Container, Message, Icon } from 'semantic-ui-react'

const PageNotFound = () =>
  <Container style={{ paddingTop: '2em' }}>
    <Message massive icon style={{ fontSize: '2rem' }}>
      <Icon name="hand spock" />
      <Message.Content>
        <Message.Header>404 - Page not found..</Message.Header>
        This isn&apos;t the page you were looking for.
      </Message.Content>
    </Message>
  </Container>

export default PageNotFound
