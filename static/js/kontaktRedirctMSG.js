const params = new URLSearchParams(window.location.search);

const sprava = params.get("sprava") || null

if (sprava === "uspech") {
    document.getElementsByTagName("h1")[0].innerHTML = "Vaša objednávka bola úspešne odoslaná!"
    document.getElementsByClassName("heroP")[0].innerHTML = "Ozveme sa Vám čoskoro"
} else if (sprava === "support") {
    document.getElementsByTagName("h1")[0].innerHTML = "Vaša správa bola odoslaná nášmu týmu."
    document.getElementsByClassName("heroP")[0].innerHTML = "Ozveme sa Vám čoskoro"
}



document.getElementById("contactForm").addEventListener("submit",async (e) => {
    e.preventDefault()
    let data = {
        meno: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telefon: document.getElementById("phone").value,
        predmet: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    let response = await fetch("https://pozicovnaaut-production.up.railway.app/supportMail",{
        method: "POST",
        headers: { "Content-type" : "application/json" },
        body: JSON.stringify(data)
    });
    if (response.status == 200) {
        window.location.href = `/kontakt?sprava=support`
    } else if (response.status == 500) {
        alert("Vyskytla sa chyba servera, ďakujeme za Vašu trpezlivosť. Skúste neskôr...")
    }
});