import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {

  const mapStyles = {
    height: '50vh',
    width: '100%',
  }
  const defaultCenter = {
    lat: 19.4267,
    lng: -99.1718
  }

  return (
    <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;