import auta from "./databasaAut.js"

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const cartitle = document.getElementsByClassName("car-title")[0];
const obrazky = document.getElementsByClassName("obr")
const continueButton = document.getElementById("continue")

continueButton.setAttribute("href",`/potvrdenie?id=${id}`)
const auto = auta.find(a => a.id === id);

cartitle.innerHTML = auto.displayName
for (let i = 0; i < obrazky.length; i++) {
    obrazky[i].style.backgroundImage = `url(/img/auta/${auto.debugName}/${i + 1}.png)`
}
