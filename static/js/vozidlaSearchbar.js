const minPriceInput = document.getElementById("min-price")
const maxPriceInput = document.getElementById("max-price")
const typVozidlaInput = document.getElementById("car-type")
const buton = document.getElementById("hladat")
const vozidlaContainer = document.getElementsByClassName("vehicles-grid")[0]

buton.addEventListener("click",(e) => {
    console.log("done");
    e.preventDefault()
    let data = {
        minPrice: parseInt(minPriceInput.value),
        maxPrice: parseInt(maxPriceInput.value),
        typVozidla: typVozidlaInput.value
    }
    // if (isNaN(data.minPrice) || isNaN(data.maxPrice)) {
    //     return;
    // }
    window.location.href = `/vozidla?min=${data.minPrice}&max=${data.maxPrice}&typ=${data.typVozidla}`
})