import auta from "./databasaAut.js"

const id = parseInt(sessionStorage.getItem("id"))
if (!id) {
    window.location.href = "/vozidla"
}
const auto = auta.find(a => a.id === id)
var pismeno
var oznaming;
var cenaOK = false
if (auto.pocetMiest == 4) {
    pismeno = "a"
} else {
    pismeno = ""
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const m1 = sessionStorage.getItem("m1") || null
const m2 = sessionStorage.getItem("m2") || null
const d1 = sessionStorage.getItem("d1") || null
const d2 = sessionStorage.getItem("d2") || null
const c1 = sessionStorage.getItem("c1") || null
const c2 = sessionStorage.getItem("c2") || null

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
const polohaSection = document.getElementById("poloha")
const osobneInputs = osobneSection.getElementsByTagName("input")
const polohaInputs = polohaSection.getElementsByTagName("input")

const coreFun = () => {
    try {
        fillDataIntoForm()
        renderInfo()
        calculatePrice()
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
    const start = new Date(`${document.getElementById("d1").value}T${document.getElementById("c1").value}`);
    const end   = new Date(`${document.getElementById("d2").value}T${document.getElementById("c2").value}`);
    
    if (end < start) {
        document.getElementsByClassName("price-value")[0].innerHTML = `Nesprávny dátum...`
        return
    }
    
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffMs   = end - start;
    
    const days = Math.max(1, Math.ceil(diffMs / msPerDay));
    let cena;
    switch (auto.typTabulky) {
        case 1: 
        if (days === 1) {
            cena = auto.jeden.cena;
        } else if (days === 2 || days === 3) {
            cena = auto.dvaTri.cena * days;
        } else if (days >= 4 && days <= 7) {
            cena = auto.styriSedem.cena * days;
        } else if (days >= 8 && days <= 14) {
            cena = auto.osemStrnast.cena * days;
        } else if (days >= 15 && days <= 30) {
            cena = auto.osemStrnast.cena * days;
        } else if (days > 30) {
            cena = "+421 948 158 119";
        }
        break;
        
        case 3: 
        if (days >= 1 && days <= 3) {
            cena = auto.jedenTri.cena * days;
        } else if (days >= 4 && days <= 6) {
            cena = auto.styriSest.cena * days;
        } else if (days >= 7 && days <= 29) {
            cena = auto.styriSedem.cena * days;
        } else if (days >= 30) {
            cena = "+421 948 158 119";
        }
        break;
        
        case 5: 
        if (days >= 1 && days <= 3) {
            cena = auto.jednaTri * days;
        } else if (days >= 4 && days <= 10) {
            cena = auto.styriDesat * days;
        } else if (days >= 11 && days <= 20) {
            cena = auto.jedenastDvadsat * days;
        } else if (days >= 21 && days <= 30) {
            cena = auto.dvadsatjednaTridsat * days;
        } else if (days > 30) {
            cena = "+421 948 158 119";
        }
        break;
    }
    if (cena) {
        document.getElementsByClassName("price-value")[0].innerHTML = `<div class="bigg">${cena}</div> €`
        cenaOK = true
    } else {
        document.getElementsByClassName("price-value")[0].innerHTML = `Vyplňte dátum a čas`
        cenaOK = false
    }
};
document.getElementById("reservationForm").addEventListener("submit",(e) => {
    e.preventDefault()
});
submitButton.addEventListener("click",async (e) => {
    e.preventDefault()
    let platba = ''
    if (document.getElementById("bank-transfer").checked) {
        platba = "prevod"
    } else if ((document.getElementById("cash").checked)) {
        platba = "cash"
    }
    let approval = true
    let prazdne = []
    let Inputs = [
        osobneInputs[0],
        osobneInputs[1],
        osobneInputs[2],
        osobneInputs[3],
        osobneInputs[4],
        polohaInputs[0],
        polohaInputs[1],
        polohaInputs[2],
        polohaInputs[3],
        m1Input,
        m2Input,
        d1Input,
        d2Input,
        t1Input,
        t2Input,
        document.getElementById("osobne-udaje"),
        document.getElementById("podmienky"),
    ]
    var data = {
        meno: osobneInputs[0].value,
        priezvisko: osobneInputs[1].value,
        email: osobneInputs[2].value,
        telefon: osobneInputs[3].value,
        rodneCislo: osobneInputs[4].value,
        adresa: polohaInputs[0].value,
        mesto: polohaInputs[1].value,
        psc: polohaInputs[2].value,
        krajina: polohaInputs[3].value,
        m1 : m1Input.value,
        m2 : m2Input.value,
        d1 : d1Input.value,
        d2 : d2Input.value,
        c1 : t1Input.value,
        c2 : t2Input.value,
        osobneUdaje: document.getElementById("osobne-udaje").checked,
        podmienky: document.getElementById("podmienky").checked,
        platba: platba,
        auto: auto
    }
    let trebaOznamit = []
    let x = -1;
    for (let key in data) {
        x++;
        if (!data[key]) {
            trebaOznamit.push(x)
            approval = false
        }
    }
    if (!approval || !cenaOK) {
        for (let i of trebaOznamit) {
            if (typeof Inputs[i] == "undefined") {
                continue
            }
            Inputs[i].classList.add("oznamujem")
        }
        await sleep(1000)
        for (let i of Inputs) {
            if (i.classList.contains("oznamujem")) {
                i.classList.remove("oznamujem");
            }
        }
    } else {
        const result = await fetch("https://pozicovnaaut-production.up.railway.app/posliObjednavku",{
            method: "POST",
            headers: { "Content-type" : "application/json" },
            body: JSON.stringify(data)
        });
        console.log(result.status);
        if (result.status === 200) {
            window.location.href = `/kontakt?sprava=uspech`
        } else {
            alert("Internal server error, skúste znova neskôr alebo nás kontaktujte!")
        }
    }
});


d1Input.addEventListener("change",() => {
    calculatePrice()
}); 
d2Input.addEventListener("change",() => {
    calculatePrice()
}); 
t1Input.addEventListener("change",() => {
    calculatePrice()
}); 
t2Input.addEventListener("change",() => {
    calculatePrice()
}); 
const tel = document.getElementById("cisloTel");
tel.addEventListener("input",() => {
    const value = tel.value;
    
    const sanitized = value.replace(/[^\d+]/g, '');
    
    const finalValue = sanitized.replace(/\+(?=.+\+)/g, '');
    
    console.log(finalValue);
    tel.value = finalValue;
});
calculatePrice()
coreFun()