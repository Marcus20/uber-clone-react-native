import { StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { OriginType } from './types/MapTypes';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  // TODO: clear origin when going back to the home screen?

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom out to display both origin and destination points
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  const getMarkerWithCoordinates = (obj: OriginType, title: string, identifier: string) => {
    return (
      <Marker
        coordinate={{
          latitude: obj.location.lat,
          longitude: obj.location.lng, 
        }}
        title={title}
        description={obj.description}
        identifier={identifier}
      />
    );
  };

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor='black'
        />
      )}

      {origin?.location &&
        getMarkerWithCoordinates(origin, 'Origin', 'origin')}
      {destination?.location &&
        getMarkerWithCoordinates(
          destination,
          'Destination',
          'destination'
        )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
