import mapbox from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    const newMarker = document.createElement("div"); // Create a new, detached DIV
newMarker.style.width = "32px";
newMarker.style.height = "39px";
newMarker.style.backgroundImage = type;

new mapboxgl.Marker(newMarker).setLngLat([coords]).addTo(map); // [-87.641, 41.895] for Chicago

};

export default buildMarker;

