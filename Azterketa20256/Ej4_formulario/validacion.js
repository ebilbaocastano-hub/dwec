// Ejercicio 4 - Validación de formulario

document.addEventListener("DOMContentLoaded", () => {

    // HTML elementuak beren ID bidez lortu[cite: 7]
    const formPelicula = document.getElementById("formPelicula");
    const inputTitulo = document.getElementById("titulo");
    const inputDirector = document.getElementById("director");
    const inputAnio = document.getElementById("anio");
    const selectCategoria = document.getElementById("categoria");
    const divMensaje = document.getElementById("mensaje");

    // Formularioa bidaltzean (submit gertaera) balioztapena exekutatu[cite: 7]
    formPelicula.addEventListener("submit", (e) => {
        // Orria berriro kargatzea saihesten du bidaltzean[cite: 7]
        e.preventDefault();

        // Eremuen balioak lortu eta muturretako espazio hutsak kendu (.trim())[cite: 7]
        const titulo = inputTitulo.value.trim();
        const director = inputDirector.value.trim();
        const anio = inputAnio.value.trim();
        const categoria = selectCategoria.value;

        // Aurretik egon daitezkeen errore-mezu pertsonalizatuak garbitu
        inputTitulo.setCustomValidity("");
        inputDirector.setCustomValidity("");
        inputAnio.setCustomValidity("");
        selectCategoria.setCustomValidity("");
        
        divMensaje.textContent = "";

        // 1. Titulua: 3 eta 50 karaktere artean[cite: 7]
        if (titulo.length < 3 || titulo.length > 50) {
            inputTitulo.setCustomValidity("Titulua 3 eta 50 karaktere artean egon behar da.");
        }

        // 2. Zuzendaria: 3 eta 50 karaktere artean[cite: 7]
        if (director.length < 3 || director.length > 50) {
            inputDirector.setCustomValidity("Zuzendaria 3 eta 50 karaktere artean egon behar da.");
        }

        // 3. Urtea: zenbakizko 4 digitu, 1900 eta 2099 artean[cite: 7]
        const anioNumero = parseInt(anio, 10);
        const esCuatroDigitos = /^\d{4}$/.test(anio);

        if (!esCuatroDigitos || isNaN(anioNumero) || anioNumero < 1900 || anioNumero > 2099) {
            inputAnio.setCustomValidity("Urteak 4 digituko zenbakia izan behar du (1900-2099 artean).");
        }

        // 4. Kategoria: ez ditzala hutsik egon[cite: 7]
        if (categoria === "") {
            selectCategoria.setCustomValidity("Kategoria bat hautatu behar duzu.");
        }

        // HTML5 API-aren bidez osotasuna egiaztatu
        if (!formPelicula.checkValidity()) {
            formPelicula.reportValidity(); // Nabigatzailearen pop-up mezuak erakutsi, 
            divMensaje.textContent = "Error: Datu batzuk gaizki daude.";
            divMensaje.style.color = "red";
        } else {
            divMensaje.textContent = "Formularioa zinean/sisteman ondo gordeta geratu da!";
            divMensaje.style.color = "green";
            formPelicula.reset();
        }
    });

});

/* ====================================================================
   TXATEAN ITSATSITAKO KODEA (IRUZKINDUTA)
   ====================================================================
// Ejercicio 4 - Validación de formulario
const formulario = document.getElementById("formPelicula");
const mensajeDiv = document.getElementById("mensaje");  
// Validaciones a implementar:
  // - titulo y director: entre 3 y 50 caracteres
  // - anio: numérico de 4 dígitos entre 1900 y 2099
  // - categoria: no vacía
formulario.addEventListener("submit", function(event){
  
  event.preventDefault();
  
  const titulo = document.getElementById("titulo");
  const director = document.getElementById("director");
  const anio = document.getElementById("anio");
  const categoria = document.getElementById("categoria");
  
  const validacionTiDir=/^[a-zA-Z\s]{3,50}$/;
  const validacionAnio= /^(19\d{2}|20\d{2})$/;

  titulo.setCustomValidity("");
  director.setCustomValidity("");
  anio.setCustomValidity("");
  categoria.setCustomValidity("");

  mensajeDiv.textContent = "";
  mensajeDiv.className = "";

  if(!validacionTiDir.test(titulo.value)){
      titulo.setCustomValidity("Mesedez 3 eta 50 arteko karaketereak izan behar dira");
  }
  if(!validacionTiDir.test(director.value)){
      director.setCustomValidity("Mesedez 3 eta 50 arteko karaketereak izan behar dira");

  }

  if(!validacionAnio.test(anio.value)){
      anio.setCustomValidity("Mesedez 1900 eta 2000 arteko urtea");

  }

  if (categoria.validity.valueMissing) {
  categoria.setCustomValidity("Kategoria derrigorrezkoa da");
}

  if(!formulario.checkValidity()){
    formulario.reportValidity();
    mensajeDiv.textContent="Error";
    mensajeDiv.style.color="red";
  }else{
    mensajeDiv.textContent="Bien";
    mensajeDiv.style.color="green";
  }
});
*/