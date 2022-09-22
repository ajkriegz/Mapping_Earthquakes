// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Get data from cities.js
let cityData = cities;

// Coordinates for each point to be used in the polyline.
let line = [
    [37.615223, -122.389977], // SF
    [30.1974292, -97.6663058], // Austin
    [42.9472, -87.8966], // Mke
    [39.053276, -84.663017], // Cinci
    [43.68187, -79.612909], //Toronto
    [40.641766, -73.780968] // NY
  ];

  // Create a polyline using the line coordinates and make the line red.
  L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: 10
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);