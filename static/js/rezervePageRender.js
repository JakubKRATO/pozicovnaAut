import auta from "./databasaAut.js"

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const auto = auta.find(a => a.id === id);
sessionStorage.setItem("id",id)

const mobil = window.innerWidth < 750

var tabulkaCon = document.getElementsByClassName("table")[0];
var TableContainerGUI = document.getElementsByClassName("moneyTable-container")[0]

var pismeno;

if (auto.pocetMiest == 4) {
  pismeno = "a"
} else {
  pismeno = ''
}

var m1 = null
var m2 = null

var d1 = null
var d2 = null

var c1 = null
var c2 = null

const submitButton = document.getElementById("continue")
const cartitle = document.getElementsByClassName("car-title")[0];
const obrazky = document.getElementsByClassName("obr")
const customInputs = mobil ? document.getElementsByClassName("getFromMobile") : document.getElementsByClassName("customP")


const m1Input = mobil ? document.getElementById("pickup-locationM") : document.getElementById("pickup-location")
const m2Input = mobil ? document.getElementById("return-locationM") : document.getElementById("return-location")
const d1Input = document.getElementById("pickup-date")
const d2Input = document.getElementById("return-date")
const t1Input = document.getElementById("pickup-time")
const t2Input = document.getElementById("return-time")

document.getElementById("prevodovka").innerHTML = `<span id="prevodovka"><i class="fas fa-cog"></i> ${auto.prevodovka}</span>`
document.getElementById("palivo").innerHTML = `<span id="palivo"><i class="fas fa-gas-pump"></i> ${auto.palivo}</span>`
document.getElementById("miesta").innerHTML = `<span id="miesta"><i class="fas fa-users"></i> ${auto.pocetMiest} miest${pismeno}</span>`
document.getElementById("typ").innerHTML = `<span id="typ"><i class="fas fa-car"></i> ${auto.kategorie}</span>`

cartitle.innerHTML = auto.displayName
for (let i = 0; i < obrazky.length; i++) {
    obrazky[i].style.backgroundImage = `url(/img/auta/${auto.debugName}/${i + 1}.webp)`
}

m1Input.addEventListener("change",(event) => {
  m1 = event.target.value
  if (!mobil) {
    if (m1Input.value !== "ine" && m2Input.value !== "ine") {
      customLogic(true,1,false)
      customLogic(true,2,false)
      customLogic(false,0,false)
      return;
    }
    if (m1 === "ine") {
      console.log(m1);
      customLogic(true,1,true)
      if (m2Input.value == "ine") {
        customLogic(true,2,true)
      }
      m1 = null
    } else {
      customLogic(true,1,false)
    }
  } else {
    m1 === "ine" ? document.getElementsByClassName("frush")[0].classList.remove("not-display") : document.getElementsByClassName("frush")[0].classList.add("not-display")
  }
});
m2Input.addEventListener("change",(event) => {
  m2 = event.target.value
  if (!mobil) {
    if (m1Input.value !== "ine" && m2Input.value !== "ine") {
      customLogic(true,1,false)
      customLogic(true,2,false)
      customLogic(false,0,false)
      return;
    }
    if (m2 === "ine") {
      customLogic(true,2,true)
      if (m1Input.value == "ine") {
        customLogic(true,1,true)
      }
      m2 = null
    } else {
      customLogic(true,2,false)
    }
  } else {
    m2 === "ine" ? document.getElementsByClassName("frushe")[0].classList.remove("not-display") : document.getElementsByClassName("frushe")[0].classList.add("not-display");
  }
});

d1Input.addEventListener("change",() => {
  d1 = d1Input.value
})
d2Input.addEventListener("change",() => {
  d2 = d2Input.value
})
t1Input.addEventListener("change",() => {
  c1 = t1Input.value
})
t2Input.addEventListener("change",() => {
  c2 = t2Input.value
})
customInputs[0].addEventListener("input",() => {
  m1 = customInputs[0].value
});
customInputs[1].addEventListener("input",() => {
  m2 = customInputs[1].value
});

const customLogic = (display,ktore,status) => {
  if (display) {
    customInputs[0].classList.remove("not-display")
    customInputs[1].classList.remove("not-display")
    if (ktore == 1) {
      customInputs[0].style.visibility = status ? "visible" : "hidden"
    }
    if (ktore == 2) {
      customInputs[1].style.visibility = status ? "visible" : "hidden"
    }
  } else if (!display) {
    customInputs[0].classList.add("not-display")
    customInputs[1].classList.add("not-display")
  }
};

submitButton.addEventListener("click",() => {
  m1 = !!m1 ? m1 : document.getElementById("customVyzdvihnutie").value
  m2 = !!m2 ? m2 : document.getElementById("customOdovzdanie").value
  let data = [m1, m2, d1, d2, c1, c2];
  let type = ["m1", "m2", "d1", "d2", "c1", "c2"];
  for (let i in data) {
    sessionStorage.setItem(type[i],data[i])
  }
  window.location.href = "/potvrdenie"
});

const renderTable = () => {
  let typ = auto.typTabulky
  console.log(typ);
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

document.getElementsByClassName("info")[0].addEventListener("click",() => {
  console.log("click")
    if (TableContainerGUI.classList.contains("hide")) {
      TableContainerGUI.classList.remove("hide");
      renderTable()
      document.getElementsByClassName("close-btn")[0].addEventListener("click", closeMenu);
    }
});
const closeMenu = () => {
  if (!TableContainerGUI.classList.contains("hide")) {
    TableContainerGUI.classList.add("hide")
  }
};