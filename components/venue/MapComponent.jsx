'use client';

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const airportIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/190/190601.png', 
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const busIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61212.png', 
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const trainIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/481/481785.png', 
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const getIcon = (type) => {
  switch (type) {
    case 'airport':
      return airportIcon;
    case 'bus':
      return busIcon;
    case 'train':
      return trainIcon;
    default:
      return DefaultIcon; 
  }
};

const MapComponent = ({ mode, data }) => {
  const center = data.coordinates || [12.9716, 77.5946];

  const stations = [
    { name: "Kempegowda International Airport", pos: [13.1991, 77.7033], type: 'airport' },
    { name: "Kempegowda Bus Station (Majestic)", pos: [12.9757, 77.5728], type: 'bus' },
    { name: "Krantivira Sangolli Rayanna (KSR) Railway Station", pos: [12.9756, 77.5697], type: 'train' },
    { name: "Yesvantpur Junction Railway Station", pos: [13.0076, 77.5683], type: 'train' },
    { name: "Shivajinagar Bus Station", pos: [12.9818, 77.6053], type: 'bus' },
  ];

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {mode === 'stations' ? (
        stations.map((station, idx) => (
          <Marker 
            key={idx} 
            position={station.pos} 
            icon={getIcon(station.type)}
          >
            <Popup>{station.name}</Popup>
          </Marker>
        ))
      ) : (
        <Marker position={data.coordinates} icon={DefaultIcon}>
          <Popup>{data.title}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
