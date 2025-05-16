import auta from "./databasaAut.js";

var vehicleContainer = document.getElementsByClassName("vehicles-grid")[0];
var tabulkaCon = document.getElementsByClassName("table")[0];
var TableContainerGUI = document.getElementsByClassName("moneyTable-container")[0]

var auto;

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < auta.length; i++) {
        const vehicle = document.createElement("div")
        vehicle.classList.add("vehicle-card")
        vehicle.innerHTML = `<div class="vehicle-image">
                        <img src="img/auta/${auta[i].debugName}/1.png" alt="Škoda Octavia">
                        <span class="category">Osobné</span>
                    </div>
                    <div class="vehicle-info">
                        <h3>${auta[i].displayName}</h3>
                        <div class="vehicle-features">
                            <span><i class="fas fa-cog"></i> Automatická</span>
                            <span><i class="fas fa-gas-pump"></i> Diesel</span>
                            <span><i class="fas fa-users"></i>5 miest</span>
                        </div>
                        <div class="vehicle-details">
                            <ul>
                                <li><i class="fas fa-check"></i>Klimatizácia</li>
                                <li><i class="fas fa-check"></i>GPS navigácia</li>
                                <li><i class="fas fa-check"></i>Parkovacie senzory</li>
                            </ul>
                        </div>
                        <div class="vehicle-price">
                            <div class="alignPrice">
                                <span class="price">od ${auta[i].displayPrice} €/deň</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-id="${auta[i].id}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="12" y1="16" x2="12" y2="12"/>
                                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                                </svg>
                            </div>
                            <a href="/rezervacia?id=${auta[i].id}" class="btn btn-primary reserveButton" data-id="${auta[i].id}">Rezervovať</a>
                        </div>
                    </div>`;
        vehicleContainer.appendChild(vehicle);
    }

    var infos = document.getElementsByClassName("info");
    Array.from(infos).forEach(info => {
        info.addEventListener("click", () => {
            let id = parseInt(info.attributes["data-id"].value);
            auto = auta.find(a => a.id === id);
            let typ = auto.typTabulky;

            renderTable(typ,auto);

            if (TableContainerGUI.classList.contains("hide")) {
                TableContainerGUI.classList.remove("hide");
                document.getElementsByClassName("close-btn")[0].addEventListener("click", closeMenu);
            }
        });
    });
});

const closeMenu = () => {
    if (!TableContainerGUI.classList.contains("hide")) {
        TableContainerGUI.classList.add("hide")
    }
};
const renderTable = (typ,auto) => {
    
    if (typ === 1) {
    tabulkaCon.innerHTML = `<button class="close-btn">✕</button>
                            <h3>Cenník - ${auto.displayName}</h3>
                            <table>
                              <thead>
                                <tr><th>Dĺžka prenájmu</th><th>Cena / deň</th><th>Limit km / deň</th></tr>
                              </thead>
                              <tbody>
                                <tr><td>1 deň</td><td>${auto.jeden.cena} €</td><td>300 km</td></tr>
                                <tr><td>2 - 3 dni</td><td>${auto.dvaTri.cena} €</td><td>300 km</td></tr>
                                <tr><td>4 - 7 dní</td><td>${auto.styriSedem.cena} €</td><td>250 km</td></tr>
                                <tr><td>8 - 14 dní</td><td>${auto.osemStrnast.cena} €</td><td>250 km</td></tr>
                                <tr><td>15 - 30 dní</td><td>${auto.patnastTridsat.cena} €</td><td>200 km</td></tr>
                              </tbody>
                            </table>`;
    } else if (typ === 2) {
        // No content yet for typ 2
    } else if (typ === 3) {
        tabulkaCon.innerHTML = `<button class="close-btn">✕</button>
                                <h3>Cenník - ${auto.displayName}</h3>
                                <table>
                                  <thead>
                                    <tr><th>Dĺžka prenájmu</th><th>Cena / deň</th></tr>
                                  </thead>
                                  <tbody>
                                    <tr><td>1 - 3 dni</td><td>${auto.jedenTri.cena} €</td></tr>
                                    <tr><td>4 - 6 dní</td><td>${auto.styriSest.cena} €</td></tr>
                                    <tr><td>7 - 29 dní</td><td>${auto.sedemDvadsatdevat.cena} €</td></tr>
                                  </tbody>
                                </table>`;
    } else if (typ === 4) {
        tabulkaCon.innerHTML = `<button class="close-btn">✕</button>
                            <h3>Cenník - [Názov vozidla]</h3>
                            <table>
                              <thead>
                                <tr>
                                  <th>Limit km</th>
                                  <th>1 - 3 dní</th>
                                  <th>4 - 10 dní</th>
                                  <th>11 - 20 dní</th>
                                  <th>21 - 30 dní</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td>150</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>
                                <tr><td>200</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>
                                <tr><td>150</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>
                                <tr><td>150</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>
                                <tr><td>200</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>
                              </tbody>
                            </table>`;
    } else if (typ === 5) {
        tabulkaCon.innerHTML = `<button class="close-btn">✕</button>
                                <h3>Cenník - ${auto.displayName}</h3>
                                <table>
                                  <thead>
                                    <tr><th>Dĺžka prenájmu</th><th>Cena / deň</th></tr>
                                  </thead>
                                  <tbody>
                                    <tr><td>1 - 3 dni</td><td>${auto.jednaTri} €</td></tr>
                                    <tr><td>4 - 10 dní</td><td>${auto.styriDesat} €</td></tr>
                                    <tr><td>11 - 20 dní</td><td>${auto.jedenastDvadsat} €</td></tr>
                                    <tr><td>21 - 30 dní</td><td>${auto.dvadsatjednaTridsat} €</td></tr>
                                  </tbody>
                                </table>`;
    };
};



// EXAMPLE VEHICLE
                //
                // <div class="vehicle-card">
                //     <div class="vehicle-image">
                //         <img src="img/auta/arteonsb/1.png" alt="Škoda Octavia">
                //         <span class="category">Osobné</span>
                //     </div>
                //     <div class="vehicle-info">
                //         <h3>Škoda Octavia</h3>
                //         <div class="vehicle-features">
                //             <span><i class="fas fa-cog"></i> Automatická</span>
                //             <span><i class="fas fa-gas-pump"></i> Diesel</span>
                //             <span><i class="fas fa-users"></i>5 miest</span>
                //         </div>
                //         <div class="vehicle-details">
                //             <ul>
                //                 <li><i class="fas fa-check"></i>Klimatizácia</li>
                //                 <li><i class="fas fa-check"></i>GPS navigácia</li>
                //                 <li><i class="fas fa-check"></i>Parkovacie senzory</li>
                //             </ul>
                //         </div>
                //         <div class="vehicle-price">
                //             <div class="alignPrice">
                //                 <span class="price">od 35 €/deň</span>
                //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info">
                //                     <circle cx="12" cy="12" r="10"/>
                //                     <line x1="12" y1="16" x2="12" y2="12"/>
                //                     <line x1="12" y1="8" x2="12.01" y2="8"/>
                //                 </svg>
                //             </div>
                //             <a href="/rezervacia" class="btn btn-primary">Rezervovať</a>
                //         </div>
                //     </div>
                // </div>
