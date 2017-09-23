import React, { Component } from 'react';
import Nav from './components/Menu';
import { Link } from 'react-router-dom';
import {
  Menu,
  Container,
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div>
        <Menu borderless>
          <Container>
            <Menu.Item as={Link} to="/">
              <Header style={{ fontWeight: 'bold', fontSize: '18px' }}>
                ECOnize
              </Header>
            </Menu.Item>
            <Menu.Item as={Link} to="/About.js">
              <Header style={{ fontWeight: '', fontSize: '18px' }}>
                About
              </Header>
            </Menu.Item>

            <Menu.Menu position="right" />
          </Container>
        </Menu>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  You better "ECOnize"!
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Econize encapsulates multiple image recognition services to
                  better help conservationalists, researchers, and other fellow
                  naturalists identify ecological data.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Identify Endangered Species in Your Area
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Each image in ECOnize is matched against the International
                  Union for Conservation of Nature's list of endangered species.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded size="large" src="/elephants.jpeg" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Explore</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default About;
