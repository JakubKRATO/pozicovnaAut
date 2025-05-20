import auta from "./databasaAut.js"

const id = parseInt(sessionStorage.getItem("id"))
if (!id) {
    window.location.href = "/vozidla"
}
const auto = auta.find(a => a.id === id)
var pismeno

if (auto.pocetMiest == 4) {
    pismeno = "a"
} else {
    pismeno = ""
}
const m1 = sessionStorage.getItem("m1") || null
const m2 = sessionStorage.getItem("m2") || null
const d1 = sessionStorage.getItem("d1") || null
const d2 = sessionStorage.getItem("d2") || null
const c1 = sessionStorage.getItem("c1") || null
const c2 = sessionStorage.getItem("c2") || null
console.log(c1,c2);

const m1Input = document.getElementById("m1")
const m2Input = document.getElementById("m2")
const d1Input = document.getElementById("d1")
const d2Input = document.getElementById("d2")
const t1Input = document.getElementById("c1")
const t2Input = document.getElementById("c2")

const obr1 = document.getElementsByClassName("car-image")[0]
const carInfo = document.getElementsByClassName("car-info")[0]
const submitButton = document.getElementsByClassName("btn-confirm")[0]
const osobneSection = document.getElementById("osobne")
const osobneInputs = osobneSection.getElementsByTagName("input")
const polohaSection

const coreFun = () => {
    try {
        fillDataIntoForm()
        renderInfo()
        calculatePrice()
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}
const fillDataIntoForm = () => {
    let data = [m1, m2, d1, d2, c1, c2];
    let array = [m1Input,m2Input,d1Input,d2Input,t1Input,t2Input]
    for (let i = 0;i < 6;i++) {
        if (data[i] == null || data[i].length == 0) {
            continue;
        }
        array[i].value = data[i]
    }
};
const renderInfo = () => {
    carInfo.innerHTML = `<h2 id="car-name"> ${auto.displayName}</h2>
                        <p class="car-specs">
                        <span><i class="fas fa-cog"></i> ${auto.prevodovka}</span>
                        <span class="separator">•</span>
                        <span><i class="fas fa-gas-pump"></i> ${auto.palivo}</span>
                        <span class="separator">•</span>
                        <span><i class="fas fa-users"></i> ${auto.pocetMiest} miest${pismeno}</span>
                        <span class="separator">•</span>
                        <span><i class="fas fa-car"></i> ${auto.kategorie}</span>
                        </p>
                        <div class="car-image">
                        </div>`
    document.getElementsByClassName("car-image")[0].style.backgroundImage = `url(/img/auta/${auto.debugName}/1.png)`
};
const calculatePrice = () => {
    const start = new Date(`${d1}T${c1}`);
    const end   = new Date(`${d2}T${c2}`);

    if (end < start) {
      throw new Error("End date/time must be after start date/time");
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    const diffMs   = end - start;

    const days = Math.max(1, Math.ceil(diffMs / msPerDay));

    console.log(days);
};
submitButton.addEventListener("click",() => {
    let data = {
        meno: osobneInputs[0],
        prieyvisko: osobneInputs[1],
        email: osobneInputs[2],
        telefon: osobneInputs[3],
        rodneCislo: osobneInputs[4],
        adresa: osobneInputs[0],
        mesto: osobneInputs[1],
        psc: osobneInputs[2],
        krajina: osobneInputs[3]
    }
});

coreFun()