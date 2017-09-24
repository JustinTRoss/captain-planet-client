import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Icon, Container, Button, Modal, Image } from 'semantic-ui-react';
import FileDrop from './Dropzone.js';

const Nav = () => (
  <Menu borderless>
    <Menu.Item as={Link} to="/">
      <Header style={{ fontWeight: 'bold', fontSize: '25px' }}>
        <span style={{ fontSize: '1.2em' }}>🦏</span> ECOgnize
      </Header>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>
        <Modal
          closeIcon
          trigger={
            <Button primary>
              Add Images <Icon style={{ paddingLeft: '.5em' }} name="upload" />
            </Button>
          }
        >
          <Modal.Header>Add Images to ECOgnize</Modal.Header>
          <Modal.Content style={{ width: '100%' }}>
            <FileDrop />
            <Modal.Description>
              <Header style={{ paddingTop: '15px' }}>Drag and drop up to 100 images at a time.</Header>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">
          <p>
            Logout <Icon style={{ paddingLeft: '.5em' }} name="sign out" />
          </p>
        </Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);
export default Nav;
