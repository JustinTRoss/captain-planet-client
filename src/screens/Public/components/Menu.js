import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Icon, Container } from 'semantic-ui-react';

const Nav = () => (
  <Menu borderless>
    <Container>
      <Menu.Item as={Link} to="/">
        <Header style={{ fontWeight: 'bold', fontSize: '18px' }}>ECOnize</Header>
      </Menu.Item>

      <Menu.Menu position="right" />
    </Container>
  </Menu>
);
export default Nav;
