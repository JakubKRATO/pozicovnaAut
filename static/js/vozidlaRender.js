import auta from "./databasaAut.js";

var noType = true

const params = new URLSearchParams(window.location.search);
const typVozidla = params.get("typ")
if (!typVozidla) {
  noType = false
}

var vehicleContainer = document.getElementsByClassName("vehicles-grid")[0];

var pismeno;
document.addEventListener("DOMContentLoaded", () => {
    vehicleContainer.innerHTML = ''
    for (let i = 0; i < auta.length; i++) {
      console.log(auta[i]);
      if (!(auta[i].kategorie.includes(typVozidla)) && noType) {
        console.log("Skipped!",auta[i].displayPrice > maxPrice , auta[i].displayPrice < minPrice , !(auta[i].kategorie.includes(typVozidla)));
        continue;
      }
      
      if (auta[i].pocetMiest == 4) {
        pismeno = "a"
      } else {
        pismeno = ''
      }
      const vehicle = document.createElement("div")
      vehicle.classList.add("vehicle-card")
      
      vehicle.innerHTML = `<div class="vehicle-image">
                            <img src="img/auta/${auta[i].debugName}/1.webp" alt="Škoda Octavia">
                            <span class="category">${auta[i].kategorie}</span>
                            </div>
                            <div class="vehicle-info">
                            <h3>${auta[i].displayName}</h3>
                            <div class="vehicle-features">
                            <span><i class="fas fa-cog"></i>${auta[i].prevodovka}</span>
                            <span><i class="fas fa-gas-pump"></i>${auta[i].palivo}</span>
                            <span><i class="fas fa-users"></i>${auta[i].pocetMiest} miest${pismeno}</span>
                            </div>
                            <div class="vehicle-details">
                            <ul>
                            <li><i class="fas fa-check"></i>Klimatizácia</li>
                            <li><i class="fas fa-check"></i>GPS navigácia</li>
                            <li><i class="fas fa-check"></i>Parkovacie senzory</li>
                            </ul>
                            </div>
                            <div class="vehicle-price">
                            <a href="/rezervacia?id=${auta[i].id}" class="btn btn-primary reserveButton" data-id="${auta[i].id}">Rezervovať</a>
                            </div>
                            </div>`;
      vehicleContainer.appendChild(vehicle);
    }
});
    
// EXAMPLE VEHICLE
//
// `<div class="vehicle-image">
// <img src="img/auta/${auta[i].debugName}/1.webp" alt="Škoda Octavia">
// <span class="category">${auta[i].kategorie}</span>
// </div>
// <div class="vehicle-info">
// <h3>${auta[i].displayName}</h3>
// <div class="vehicle-features">
// <span><i class="fas fa-cog"></i>${auta[i].prevodovka}</span>
// <span><i class="fas fa-gas-pump"></i>${auta[i].palivo}</span>
// <span><i class="fas fa-users"></i>${auta[i].pocetMiest} miest${pismeno}</span>
// </div>
// <div class="vehicle-details">
// <ul>
// <li><i class="fas fa-check"></i>Klimatizácia</li>
// <li><i class="fas fa-check"></i>GPS navigácia</li>
// <li><i class="fas fa-check"></i>Parkovacie senzory</li>
// </ul>
// </div>
// <div class="vehicle-price">
// <div class="alignPrice">
// <span class="price">od ${auta[i].displayPrice} €/deň</span>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-id="${auta[i].id}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info">
// <circle cx="12" cy="12" r="10"/>
// <line x1="12" y1="16" x2="12" y2="12"/>
// <line x1="12" y1="8" x2="12.01" y2="8"/>
// </svg>
// </div>
// <a href="/rezervacia?id=${auta[i].id}" class="btn btn-primary reserveButton" data-id="${auta[i].id}">Rezervovať</a>
// </div>
// </div>`
