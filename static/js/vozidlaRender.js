import auta from "./databasaAut.js"

var vehicleContainer = document.getElementsByClassName("vehicles-grid")[0]
var auto;
document.addEventListener("DOMContentLoaded",() => {
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-id=" ${auta[i].id}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="12" y1="16" x2="12" y2="12"/>
                                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                                </svg>
                            </div>
                            <a href="/rezervacia" class="btn btn-primary">Rezervovať</a>
                        </div>
                    </div>`
        console.log(vehicle);
        vehicleContainer.appendChild(vehicle)
    }
    var infos = document.getElementsByClassName("info")
    Array.from(infos).forEach(info => {
        info.addEventListener("click",() => {
            let id = parseInt(info.attributes["data-id"].value)
            auto = auta.find(a => a.id === id);
            // tu si skoncil a chces robit tu tabulku potom
        });
    });
});




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
