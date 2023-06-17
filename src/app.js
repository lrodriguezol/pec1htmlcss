//FUNCIONALIDADES APLICANDO CARGA ASÍNCRONA:

//FUNCIONALIDAD JAVASCRIPT 1: Abrir a partir de un enlace/image/boton una nueva ventana con una url determinada
var botonTwitter = document.querySelector('#boton-twitter');
if (botonTwitter) {
  botonTwitter.addEventListener('click', async function() {
    var shareUrl = 'https://twitter.com/ciudadjerez';
    await new Promise(function(resolve) {
      setTimeout(function() {
        window.open(shareUrl);
        resolve();
      }, 0); // Carga inmediatamente la nueva ventana
    });
  });
}

//FUNCIONALIDAD JAVASCRIPT 1: Abrir a partir de un enlace/imagen/boton una nueva ventana con una url determinada
var botonFacebook = document.querySelector('#boton-facebook');
if (botonFacebook) {
  botonFacebook.addEventListener('click', async function() {
    var shareUrl = 'https://es-es.facebook.com/AyuntamientodeJerez/';
    await new Promise(function(resolve) {
      setTimeout(function() {
        window.open(shareUrl);
        resolve();
      }, 0); // Carga inmediatamente la nueva ventana
    });
  });
}

//FUNCIONALIDAD JAVASCRIPT 2: Agrandar y achicar una imagen al hacer click en ella
var miImagen = document.getElementById("mi-imagen");
if (miImagen) {
  miImagen.addEventListener("click", async function() {
    await new Promise(function(resolve) {
      setTimeout(function() {
        if (miImagen.style.transform === "scale(2)") {
          miImagen.style.transform = "scale(1)";    
        } else {
          miImagen.style.transform = "scale(2)";
        }
        resolve();
      }, 0); // Carga inmediata del cambio de escala de la imagen
    });
  });
}