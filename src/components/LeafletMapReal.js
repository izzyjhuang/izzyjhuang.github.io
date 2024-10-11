import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leafletmap.css';
import usStates from './data/usStatesGeoJSON.json'; // Import the US states GeoJSON

const visitedStates = ["CA", "IL", "IN", "KY", "IA", "MI", "MN", "WI", "PA", "NY", "NJ", 
    "MA", "CT", "RI", "NV", "UT", "AZ", "WY", "NE", "CO", "TX"];

const LeafletMap = () => {
  const mapRef = useRef(null); // To store the main map instance
  const hawaiiMapRef = useRef(null); // To store the Hawaii map instance
  const alaskaMapRef = useRef(null); // To store the Alaska map instance

  // Function to dynamically set the view and zoom based on window size
  const setUSDynamicView = (map, centerCoordinates) => {
    const screenWidth = window.innerWidth;

    // Set zoom level based on screen width
    const zoomLevel = screenWidth >= 2048 ? 5 : screenWidth >= 1024 ? 4 : 3;

    // Set map center and zoom dynamically
    map.setView(centerCoordinates, zoomLevel);
  };

  const setAlaskaDynamicView = (map, centerCoordinates) => {
    const screenWidth = window.innerWidth;

    // Set zoom level based on screen width
    const zoomLevel = screenWidth >= 2048 ? 3 : screenWidth >= 1024 ? 2 : 1;

    // Set map center and zoom dynamically
    map.setView(centerCoordinates, zoomLevel);
  };

  const setHawaiiDynamicView = (map, centerCoordinates) => {
    const screenWidth = window.innerWidth;

    // Set zoom level based on screen width
    const zoomLevel = screenWidth >= 2048 ? 6 : screenWidth >= 1024 ? 5 : 4;

    // Set map center and zoom dynamically
    map.setView(centerCoordinates, zoomLevel);
  };

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the main map focused on the continental US
      const map = L.map('map');
      mapRef.current = map;
      setUSDynamicView(map, [37.8, -101]); // Dynamic view based on window size

      // Add tile layer for the main map
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Define the style for states
      const stateStyle = (feature) => ({
        fillColor: visitedStates.includes(feature.properties.STUSPS) ? '#ACD8A7' : '#808080',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.9
      });

      // Add GeoJSON layer for the continental US
      const geojsonLayer = L.geoJSON(usStates, {
        style: stateStyle,
        onEachFeature: (feature, layer) => {
          const stateAbbreviation = feature.properties.STUSPS;
          const stateName = feature.properties.NAME;

          // Initial tooltip with the state abbreviation
          layer.bindTooltip(stateAbbreviation, {
            permanent: true,
            direction: 'center',
            className: 'state-label'
          }).openTooltip();

          // Add a click event to show the full state name
          layer.on({
            click: () => alert(`You clicked on ${stateName}`)
          });
        }
      }).addTo(map);

      // Listen to zoom changes to update tooltips
      map.on('zoomend', () => {
        const zoomLevel = map.getZoom();
        geojsonLayer.eachLayer((layer) => {
          const feature = layer.feature;
          const stateAbbreviation = feature.properties.STUSPS;
          const stateName = feature.properties.NAME;

          if (zoomLevel >= 7) {
            layer.setTooltipContent(stateName);
          } else {
            layer.setTooltipContent(stateAbbreviation);
          }
        });
      });
    }

    if (!alaskaMapRef.current) {
        const alaskaMap = L.map('alaska-map');
        alaskaMapRef.current = alaskaMap;
        setAlaskaDynamicView(alaskaMap, [64.2, -155]); // Dynamic view for Alaska

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(alaskaMap);

        const stateStyle = (feature) => ({
            fillColor: visitedStates.includes(feature.properties.STUSPS) ? '#ACD8A7' : '#808080',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.9
          });

        L.geoJSON(usStates, {
          style: stateStyle,
        }).addTo(alaskaMap);
      }

    if (!hawaiiMapRef.current) {
      const hawaiiMap = L.map('hawaii-map');
      hawaiiMapRef.current = hawaiiMap;
      setHawaiiDynamicView(hawaiiMap, [21, -157]); // Dynamic view for Hawaii

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(hawaiiMap);

      const stateStyle = (feature) => ({
        fillColor: visitedStates.includes(feature.properties.STUSPS) ? '#ACD8A7' : '#808080',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.9
      });

      L.geoJSON(usStates, {
        style: stateStyle,
      }).addTo(hawaiiMap);
    }

    // Add event listener to adjust map view dynamically when the window is resized
    const handleResize = () => {
      if (mapRef.current) {
        setUSDynamicView(mapRef.current, [37.8, -101]); // Continental US
      }
      if (alaskaMapRef.current) {
        setAlaskaDynamicView(alaskaMapRef.current, [64.2, -155]); // Alaska
      }
      if (hawaiiMapRef.current) {
        setHawaiiDynamicView(hawaiiMapRef.current, [21, -157]); // Hawaii
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="map-container">
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
      <div className="side-maps">
        <div id="alaska-map" className="small-map"></div>
        <div id="hawaii-map" className="small-map"></div>
      </div>
    </div>
  );
};

export default LeafletMap;
