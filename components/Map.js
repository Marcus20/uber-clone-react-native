import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
  const origin = useSelector(selectOrigin);
  // handle if there isn't a location selected?
  // clear origin when going back to the home screen?

  return (
    <MapView
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin ? origin.location.lat : 37.78825,
        longitude: origin ? origin.location.lng : -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
