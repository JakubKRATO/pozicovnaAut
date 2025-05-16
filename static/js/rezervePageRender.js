import auta from "./databasaAut.js"

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const cartitle = document.getElementsByClassName("car-title")[0];
const obrazky = document.getElementsByClassName("obr")

const auto = auta.find(a => a.id === id);

cartitle.innerHTML = auto.displayName
for (let i = 0; i < obrazky.length; i++) {
    console.log(obrazky[i],`url(/img/auta/${auto.debugName}/${i + 1}.png)`,"url(/img/auta/arteonsb/1.png);");
    obrazky[i].style.backgroundImage = `url(/img/auta/${auto.debugName}/${i + 1}.png)`
}
console.log("finished");
