import React, { Component } from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import Nav from './components/Menu';
import MapMain from './components/MapMain';
import About from './components/About';

const DataArray = [
	{
		id: 1,
		lat: 0.533,
		lng: 16.0,
		image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-1.jpg',
		info: '',
		header: '09/23/17',
		meta: 'Rhino',
		description: '',
	},
	{
		id: 2,
		lat: 2.114,
		lng: 13.212,
		image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-2.jpg',
		info: '',
		header: '09/23/17',
		meta: 'Hippo',
		description: '',
	},
	{
		id: 3,
		lat: 0.333,
		lng: 14.323,
		image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-3.jpg',
		info: '',
		header: '09/23/17',
		meta: 'Fox',
		description: '',
	},
	{
		id: 4,
		lat: 0.123,
		lng: 15,
		image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-4.jpg',
		info: '',
		header: '09/22/17',
		meta: 'Porcupine',
		description: '',
	},
];

class Home extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Container>
					<MapMain
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfOfXY8kPTjiZn4mhqq5ve8RL2NkZYRNg&callback=initMap"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `400px` }} />}
						mapElement={<div style={{ height: `100%` }} />}
						style={{ paddingTop: '20px' }}
					/>
					<Header
						style={{
							textAlign: 'center',
							fontSize: '40px',
						}}
					>
						Click on location to view wildlife images
					</Header>
					<Card.Group itemsPerRow={3} stackable>
						{DataArray.map(props => (
							<Card key={props.id} {...props} />
						))}
					</Card.Group>
				</Container>
			</div>
		);
	}
}

export default Home;
