const items = document.querySelectorAll(".item")

items.forEach(item => {
    item.addEventListener("mouseover", () => {
        for (let i = 0; i < items.length; i++) {
            items[i].style.animationPlayState = "paused" 
        }
    });
    item.addEventListener("mouseleave", () => {
        for (let i = 0; i < items.length; i++) {
            items[i].style.animationPlayState = "running" 
        }
    });
});