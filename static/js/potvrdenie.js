import auta from "./databasaAut.js"

const id = sessionStorage.getItem("id")
console.log(id);
if (!id) {
    window.location.href = "/vozidla"
}


const obr1 = document.getElementsByClassName("car-image")[0]
const carName = document.getElementById("car-name")

carName.innerHTML = auto.displayName