import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7128, // Default latitude
  lng: -74.0060, // Default longitude
};

const Map = ({ address }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBr6zvRtpi6MqRKpUsqH5sU0AnCJshRXzM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
