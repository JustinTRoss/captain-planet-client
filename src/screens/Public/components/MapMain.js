import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import CustomMarker from './CustomMarker';
import NightMode from '../dark_styles.json';

const MapMain = compose(withScriptjs, withGoogleMap)(props => (
  <GoogleMap
    defaultZoom={6}
    options={{ gestureHandling: 'cooperative', mapTypeId: 'roadmap', streetViewControl: false, styles: NightMode }}
    defaultCenter={{ lat: 0.228, lng: 15.827 }}
  >
    {props.data.map(props => <CustomMarker key={props.lat} {...props} />)}
  </GoogleMap>
));

export default MapMain;
