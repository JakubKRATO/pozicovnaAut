const params = new URLSearchParams(window.location.search);

const sprava = params.get("sprava") || null

if (sprava) {
    document.getElementsByTagName("h1")[0].innerHTML = "Vaša objednávka bola úspešne odoslaná!"
    document.getElementsByClassName("heroP")[0].innerHTML = "Ozveme sa Vám čoskoro"
}