
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRjaG8iLCJhIjoiY2todXQzdXUxMWdpZjJ3bWNsZmh2aTM4cCJ9.U-HaOx8IKR-HBYe9ZC5dRQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomElNYC = document.createElement("div"); // Create a new, detached DIV
markerDomElNYC.style.width = "32px";
markerDomElNYC.style.height = "39px";
markerDomElNYC.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomElNYC).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

const markerDomElChicago = document.createElement("div"); // Create a new, detached DIV
markerDomElChicago.style.width = "32px";
markerDomElChicago.style.height = "39px";
markerDomElChicago.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomElChicago).setLngLat([-87.641, 41.895]).addTo(map); // [-87.641, 41.895] for Chicago