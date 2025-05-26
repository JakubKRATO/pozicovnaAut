const params = new URLSearchParams(window.location.search);

const sprava = params.get("sprava") || null

if (sprava) {
    document.getElementsByTagName("h1")[0].innerHTML = "Vaša objednávka bola úspešne odoslaná!"
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
    let response = await fetch("https://localhost:3500/supportMail",{
        method: "POST",
        headers: { "Content-type" : "application/json" },
        body: JSON.stringify(data)
    });
    console.log(response.status);
});