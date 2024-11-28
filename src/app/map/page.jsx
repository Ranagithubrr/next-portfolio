"use client"
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

// Sample location data
const locationData = [
  {
    lat: 23.7747523,
    lng: 90.3654215,
    name: 'National Museum of Science and Technology',
    description: 'A famous museum showcasing science and technology.',
    propertyId: 1,
  },
  {
    lat: 23.8103,
    lng: 90.4125,
    name: 'Another Location',
    description: 'A popular landmark with historical significance.',
    propertyId: 2,
  },
  {
    lat: 23.7597,
    lng: 90.3738,
    name: 'Yet Another Location',
    description: 'A great place for visitors to explore.',
    propertyId: 3,
  },
];

// Function to create markers with popups
const createMarkers = (map, locations) => {
  locations.forEach((location) => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(`
      <div>
        <h3>${location.name}</h3>
        <p>${location.description}</p>
        <a href="/location/${location.propertyId}" target="_blank">View Details</a>
      </div>
    `);
  });
};

const Page = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize map and store it in the ref
      mapRef.current = L.map('map', { zoomControl: false }).setView([23.8103, 90.4125], 8);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Add markers
      createMarkers(mapRef.current, locationData);

      // Resize map to fit container
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 100); // Ensures map re-renders after the initial load
    }
  }, []);

  return (
    <div className='h-30 w-30'> 
      <div
        id="map"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '30vh',
          width: '30vw',
        }}
      />
    </div>
  );
}

export default Page;
