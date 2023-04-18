// seleccionar la imagen
/*var miImagen = document.getElementById("miImagen");

// agregar el evento de click para agrandar la imagen
miImagen.addEventListener("click", function() {
  miImagen.style.transform = "scale(1.5)";
});

// agregar el evento de click para reducir la imagen
miImagen.addEventListener("click", function() {
  miImagen.style.transform = "scale(1)";
});*/


const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

