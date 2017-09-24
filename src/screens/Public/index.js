import React, { Component } from 'react';
import { Container, Header, Card, Input, Grid } from 'semantic-ui-react';
import Nav from './components/Menu';
import MapMain from './components/MapMain';
import CustomCard from './components/CustomCard';

const DataArray = [
  {
    id: 1,
    lat: 0.533,
    lng: 16.0,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-1.jpg',
    info: 'Photo 1 info',
    header: '09/23/17',
    meta: 'Rhino',
    description: '',
    options: ['Rhino 99%', 'Hippo 60%', 'Elephant 10%']
  },
  {
    id: 2,
    lat: 2.114,
    lng: 13.212,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-2.jpg',
    info: 'Photo 2 info',
    header: '09/23/17',
    meta: 'Hippo',
    description: '',
    options: ['Hippo 99%', 'Rhino 60%', 'Elephant 10%']
  },
  {
    id: 3,
    lat: 0.333,
    lng: 14.323,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-3.jpg',
    info: 'Photo 3 info',
    header: '09/23/17',
    meta: 'Fox',
    description: '',
    options: ['Fox 99%', 'Dog 70%', 'Wolf 68%']
  },
  {
    id: 4,
    lat: 0.123,
    lng: 15,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-4.jpg',
    info: 'Photo 4 info',
    header: '09/22/17',
    meta: 'Porcupine',
    description: '',
    options: ['Porcupine 99%', 'Hedgehog 60%', 'Skunk 10%']
  },
  {
    id: 5,
    lat: 1.533,
    lng: 16.0,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-1.jpg',
    info: 'Photo 5 info',
    header: '09/23/17',
    meta: 'Rhino',
    description: '',
    options: ['Rhino 99%', 'Hippo 60%', 'Elephant 10%']
  },
  {
    id: 6,
    lat: 1.194,
    lng: 14.212,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-2.jpg',
    info: 'Photo 6 info',
    header: '09/23/17',
    meta: 'Hippo',
    description: '',
    options: ['Hippo 99%', 'Rhino 60%', 'Elephant 10%']
  },
  {
    id: 7,
    lat: 0.933,
    lng: 15.323,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-3.jpg',
    info: 'Photo 7 info',
    header: '09/23/17',
    meta: 'Fox',
    description: '',
    options: ['Fox 99%', 'Dog 70%', 'Wolf 68%']
  },
  {
    id: 8,
    lat: 0.923,
    lng: 15,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-4.jpg',
    info: 'Photo 8 info',
    header: '09/22/17',
    meta: 'Porcupine',
    description: '',
    options: ['Porcupine 99%', 'Hedgehog 60%', 'Skunk 10%']
  }
];

class Home extends Component {
  state = {
    data: DataArray,
    searchTerm: ''
  };
  handleMouseOver = e => {
    const data = this.state.data;
    const id = e.currentTarget.dataset.id;
    const datum = data.find(pic => parseInt(pic.id, 10) === parseInt(id, 10));
    datum.hovered = true;
    this.setState(() => ({
      data: [...data]
    }));
  };
  handleMouseExit = e => {
    const data = this.state.data;
    const id = e.currentTarget.dataset.id;
    const datum = data.find(pic => parseInt(pic.id, 10) === parseInt(id, 10));
    datum.hovered = false;
    this.setState(() => ({
      data: [...data]
    }));
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const data = this.state.data;
    const searchTerm = this.state.searchTerm;
    const searchResults = data.filter(datum =>
      datum.options
        .join(' ')
        .toLowerCase()
        .includes(searchTerm)
    );

    return (
      <div style={{ paddingBottom: '1em', height: '100vh' }}>
        <Nav />
        <div style={{ padding: '1em' }}>
          <MapMain
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfOfXY8kPTjiZn4mhqq5ve8RL2NkZYRNg&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `375px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            data={searchResults}
          />
          <Container>
            <Grid columns="equal" style={{ padding: '25px' }}>
              <Grid.Row columns={2}>
                <Grid.Column width={10}>
                  <Header
                    style={{
                      textAlign: 'center',
                      fontSize: '40px'
                    }}
                  >
                    Your ECOgnized Images
                  </Header>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Input
                    icon="search"
                    placeholder="Search..."
                    onChange={this.handleSearchTermChange}
                    value={this.state.searchTerm}
                    type="text"
                    style={{ width: '300px', paddingTop: '5px' }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <div style={{ maxHeight: '40vh', display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll' }}>
            {searchResults.map(props => (
              <CustomCard
                key={props.id}
                handleMouseExit={this.handleMouseExit}
                handleMouseOver={this.handleMouseOver}
                {...props}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
