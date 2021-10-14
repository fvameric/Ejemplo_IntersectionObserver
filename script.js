// pillamos la caja
const caja = document.querySelector('.caja');

// Si la caja aparece en el scroll se indicará como visible
var observer = new IntersectionObserver(
  elementos => {
  if (elementos[0].isIntersecting) {
    document.getElementById('visible').innerHTML = "Visible";
  } else {
    document.getElementById('visible').innerHTML = "Invisible";
  }
});
//empezamos a observar
observer.observe(caja);