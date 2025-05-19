import auta from "./databasaAut.js"

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const auto = auta.find(a => a.id === id);
sessionStorage.setItem("id",id)

var pismeno;

if (auto.pocetMiest == 4) {
  pismeno = "a"
} else {
  pismeno = ''
}

var m1 = null
var m2 = null

var c1 = null
var c2 = null

var t1 = null
var t2 = null

const cartitle = document.getElementsByClassName("car-title")[0];
const obrazky = document.getElementsByClassName("obr")
const customInputs = document.getElementsByClassName("not-necessary")

document.getElementById("prevodovka").innerHTML = `<span id="prevodovka"><i class="fas fa-cog"></i> ${auto.prevodovka}</span>`
document.getElementById("palivo").innerHTML = `<span id="palivo"><i class="fas fa-gas-pump"></i> ${auto.palivo}</span>`
document.getElementById("miesta").innerHTML = `<span id="miesta"><i class="fas fa-users"></i> ${auto.pocetMiest} miest${pismeno}</span>`
document.getElementById("typ").innerHTML = `<span id="typ"><i class="fas fa-car"></i> ${auto.kategorie}</span>`
document.getElementsByClassName("price-display")[0].innerHTML = `CENA: ${auto.displayPrice} €/deň`

cartitle.innerHTML = auto.displayName
for (let i = 0; i < obrazky.length; i++) {
    obrazky[i].style.backgroundImage = `url(/img/auta/${auto.debugName}/${i + 1}.png)`
}

document.getElementById("pickup-location").addEventListener("change",(event) => {
  m1 = event.target.value
  if (m1 === "ine") {
    if (customInputs[0].classList.contains("not-necessary")) {
      customInputs[0].classList.remove("not-necessary")
    }
  }
});