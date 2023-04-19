
//FUNCIONALIDAD JAVASCRIPT 1: Abrir a partir de un enlace/image/boton una nueva ventana con una url determinada
document.querySelector('#boton-twitter').addEventListener('click', function() {

    var shareUrl = 'https://twitter.com/ciudadjerez';
    window.open(shareUrl);
  });



//FUNCIONALIDAD JAVASCRIPT 1: Abrir a partir de un enlace/imagen/boton una nueva ventana con una url determinada
document.querySelector('#boton-facebook').addEventListener('click', function() {

    var shareUrl = 'https://es-es.facebook.com/AyuntamientodeJerez/';
    window.open(shareUrl);
  });



//FUNCIONALIDAD JAVASCRIPT 2: Agrandar y achicar una imagen al hacer click en ella
var miImagen = document.getElementById("mi-imagen");

miImagen.addEventListener("click", function() {

  if (miImagen.style.transform === "scale(2)") {
    miImagen.style.transform = "scale(1)";    
  } else {
    miImagen.style.transform = "scale(2)";
  }
});