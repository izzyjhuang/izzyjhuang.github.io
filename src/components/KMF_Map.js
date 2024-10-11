import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leafletmap.css'; // Your custom styles
import markerData from './data/kmf-map-entries.json'; // Import the JSON file

const KmfMap = () => {
  const mapRef = useRef(null); // To store map instance

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map focused on the US
      const map = L.map('map').setView([37.8, -96], 5); // Center on US, zoom to show states
      mapRef.current = map; // Store the map instance in the ref

      // Add a tile layer (map style)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Loop through the marker data from JSON and create markers dynamically
      markerData.forEach((person) => {
        // Define a custom icon for each person based on their image field
        const customIcon = L.icon({
          iconUrl: person.image, // Use the image field from the JSON
          iconSize: [25, 25], // Size of the icon in pixels (adjust as needed)
          iconAnchor: [25, 50], // Point where the icon is anchored (center bottom)
          popupAnchor: [0, -50], // Point where the popup should open relative to the icon anchor
        });

        // Add the marker with the custom icon
        const marker = L.marker(person.coordinates, { icon: customIcon }).addTo(map);

        // Define the content for the popup
        const popupContent = `
          <b>${person.name}</b><br>
          ${person.year}<br>
          ${person.university}<br>
          ${person.role}<br>
          ${person.company}
        `;

        // On click, create and open a new popup for each marker
        marker.on('click', () => {
          L.popup({
            maxWidth: 250,
            closeOnClick: false, // Keep the popups open even when clicking on the map
            autoClose: false // Disable auto-close of popups when others are opened
          })
          .setLatLng(person.coordinates)
          .setContent(popupContent)
          .openOn(map);
        });
      });
    }
  }, []); // The empty array ensures this effect runs only once (on mount)

  return (
    <div className="kmf-map-container">
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default KmfMap;
