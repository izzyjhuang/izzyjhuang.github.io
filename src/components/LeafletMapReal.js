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

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the main map focused on the continental US
      const map = L.map('map').setView([37.8, -101], 5);
      mapRef.current = map;

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
        // Initialize the map for Alaska
        const alaskaMap = L.map('alaska-map').setView([64.2, -155], 3); // Center on Alaska
        alaskaMapRef.current = alaskaMap;
  
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
          }).addTo(alaskaMap);
    
          // Listen to zoom changes to update tooltips
          alaskaMap.on('zoomend', () => {
            const zoomLevel = alaskaMap.getZoom();
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

    if (!hawaiiMapRef.current) {
      // Initialize the map for Hawaii
      const hawaiiMap = L.map('hawaii-map').setView([21, -157], 6); // Center on Hawaii
      hawaiiMapRef.current = hawaiiMap;

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
      }).addTo(hawaiiMap);

      // Listen to zoom changes to update tooltips
      hawaiiMap.on('zoomend', () => {
        const zoomLevel = hawaiiMap.getZoom();
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
