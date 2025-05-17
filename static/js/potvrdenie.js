import auta from "./databasaAut.js"

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const auto = auta.find(a => a.id === id);

if (!auto) {
    window.location.href = "/vozidla"
}

const obr1 = document.getElementsByClassName("car-image")[0]
const carName = document.getElementById("car-name")

obr1.style .backgroundImage = `url(/img/auta/${auto.debugName}/1.png)`
carName.innerHTML = auto.displayName