import renderVehicles from "./vozidlaRender.js"

const slider = document.getElementById('slider');
const buttons = document.querySelectorAll('.filter-btn');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function moveSliderTo(button) {

  const rect = button.getBoundingClientRect();
  const wrapperRect = button.parentElement.getBoundingClientRect();
  
  slider.style.width = rect.width + 'px';
  slider.style.transform = `translateX(${rect.left - wrapperRect.left}px)`;
}

buttons.forEach(btn => {
  btn.addEventListener('click',async () => {
    
    if (btn.classList.contains("active")) {
      slider.style.visibility = "hidden"
      renderVehicles.renderVehicles(null)
      await sleep(500)
      btn.classList.remove("active")
      return;
    }
    
    buttons.forEach(b => b.classList.remove('active'));
    slider.style.visibility = "visible"
    btn.classList.add('active');
    let trieda = btn.attributes["data-trieda"].value
    renderVehicles.renderVehicles(trieda)
    moveSliderTo(btn);
  });
});

// Initialize on first load
window.addEventListener('load', () => {
  const active = document.querySelector('.filter-btn.active');
  if (active) moveSliderTo(active);
});