const places = [
{
name: "Praia de Faro",
type: "beach",
description: "Beautiful long sandy beach near the airport."
},
{
name: "Old Town (Cidade Velha)",
type: "culture",
description: "Historic walls, cobbled streets and architecture."
},
{
name: "Faro Marina",
type: "culture",
description: "Nice waterfront with boats and restaurants."
},
{
name: "Ria Formosa",
type: "beach",
description: "Natural park with islands and wildlife."
},
{
name: "Local Restaurants",
type: "food",
description: "Great Portuguese seafood and traditional dishes."
}
];

let currentFilter = "all";

// Render places
function displayPlaces(list) {
const container = document.getElementById("placesContainer");
container.innerHTML = "";

list.forEach(place => {
container.innerHTML += `
<div class="card">
<h3>${place.name}</h3>
<p>${place.description}</p>
<small>${place.type}</small>
</div>
`;
});
}

// Filter system
function filterPlaces(type) {
currentFilter = type;

if (type === "all") {
displayPlaces(places);
} else {
const filtered = places.filter(p => p.type === type);
displayPlaces(filtered);
}
}

// Search system
document.getElementById("searchBar").addEventListener("input", function (e) {
const value = e.target.value.toLowerCase();

const filtered = places.filter(place =>
place.name.toLowerCase().includes(value) ||
place.description.toLowerCase().includes(value)
);

displayPlaces(filtered);
});

// Load all places on start
displayPlaces(places);
