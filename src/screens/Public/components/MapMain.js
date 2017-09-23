import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import CustomMarker from './CustomMarker';
import NightMode from '../dark_styles.json';

const DataArray = [
  {
    id: 1,
    lat: 0.533,
    lng: 16.0,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-1.jpg',
    info: '',
    header: '09/23/17',
    meta: 'Rhino',
    description: ''
  },
  {
    id: 2,
    lat: 2.114,
    lng: 13.212,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-2.jpg',
    info: '',
    header: '09/23/17',
    meta: 'Hippo',
    description: ''
  },
  {
    id: 3,
    lat: 0.333,
    lng: 14.323,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-3.jpg',
    info: '',
    header: '09/23/17',
    meta: 'Fox',
    description: ''
  },
  {
    id: 4,
    lat: 0.123,
    lng: 15,
    image: 'http://d3e8siwsor5u31.cloudfront.net/camera-trap-4.jpg',
    info: '',
    header: '09/22/17',
    meta: 'Porcupine',
    description: ''
  }
];

const MapMain = compose(withScriptjs, withGoogleMap)(props => (
  <GoogleMap
    defaultZoom={6}
    options={{ gestureHandling: 'cooperative', mapTypeId: 'roadmap', streetViewControl: false, styles: NightMode }}
    defaultCenter={{ lat: 0.228, lng: 15.827 }}
  >
    {DataArray.map(props => <CustomMarker key={props.lat} {...props} />)}
  </GoogleMap>
));

export default MapMain;
