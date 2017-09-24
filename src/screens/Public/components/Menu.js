import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Icon, Container, Button } from 'semantic-ui-react';

const Nav = () => (
  <Menu borderless>
    <Menu.Item as={Link} to="/">
      <Header style={{ fontWeight: 'bold', fontSize: '25px' }}>
        <span style={{ fontSize: '1.2em' }}>🦏</span> ECOgnize
      </Header>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>
        <Button>
          Add Images <Icon style={{ paddingLeft: '.5em' }} name="upload" />
        </Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);
export default Nav;
