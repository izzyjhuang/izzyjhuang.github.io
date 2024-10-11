import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leafletmap.css'; // Your custom styles
import markerData from './data/kmf-map-entries.json'; // Import the JSON file

const KmfMap = () => {
  const mapRef = useRef(null); // To store map instance

  useEffect(() => {
    // Calculate screen width and set the appropriate zoom level
    const setUSDynamicView = (map, centerCoordinates) => {
      const screenWidth = window.innerWidth;
      const zoomLevel = screenWidth >= 2048 ? 6 : screenWidth >= 1024 ? 5 : screenWidth >= 767 ? 4 : 3;
          // Set map center and zoom dynamically
        map.setView(centerCoordinates, zoomLevel);
      };

    if (!mapRef.current) {
      // Initialize the map with dynamic zoom level
      const map = L.map('map'); // Center on US, zoom based on screen size
      mapRef.current = map; // Store the map instance in the ref
      setUSDynamicView(map, [37.8, -96]); // Dynamic view based on window size


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

    // Add event listener to adjust map view dynamically when the window is resized
    const handleResize = () => {
      if (mapRef.current) {
        setUSDynamicView(mapRef.current, [37.8, -101]); // Continental US
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty array ensures this effect runs only once (on mount)

  
  return (
    <div className="kmf-map-container">
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default KmfMap;
