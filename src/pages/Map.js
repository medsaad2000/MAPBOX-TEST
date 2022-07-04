import { Helmet } from 'react-helmet';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;

export default function Map(){
  

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-73.5634);
const [lat, setLat] = useState(45.4979);
const [zoom, setZoom] = useState(12.73);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: zoom
  });
  });

   
  useEffect(() => {
  if (!map.current) return; // wait for map to initialize
  map.current.on('move', () => {
  setLng(map.current.getCenter().lng.toFixed(4));
  setLat(map.current.getCenter().lat.toFixed(4));
  setZoom(map.current.getZoom().toFixed(2));
  
  });
  });
   
  return (
  <div>
      <Helmet>
        <title>Livecity | MAP</title>
      </Helmet>
  <div className="sidebar">
  Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
  </div>
  <div ref={mapContainer} className="map-container" />
  </div>
  );
}