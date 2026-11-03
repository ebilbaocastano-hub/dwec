document.addEventListener("DOMContentLoaded", () => {
    /* ---------- Referencias a los elementos del HTML ---------- */
const formInscripcion   = document.getElementById("formInscripcion");
const inputNombre       = document.getElementById("nombre");
const inputLema         = document.getElementById("lema");
const selectCategoria   = document.getElementById("categoria");
const btnInscribir      = document.getElementById("btnInscribir");

const pAyuda            = document.getElementById("ayuda");
const divErrores        = document.getElementById("errores");

const listaConcursantes = document.getElementById("listaConcursantes");
const pUltimaInscrita   = document.getElementById("ultimaInscrita");

formInscripcion.addEventListener("submit", (e) => {
    e.preventDefault();

    inputNombre.setCustomValidity("");
    inputLema.setCustomValidity("");
    selectCategoria.setCustomValidity("");

    const validacionNombre = /^[a-zA-Z\s]+[a-zA-Z\s]$/;
    const validacionLema = /^[a-zA-Z\s]{5,40}$/;
    
    if (!validacionNombre.test(inputNombre.value)){
      inputNombre.setCustomValidity("Letraz osatutako eta zuriune bakar batez bereizitako bi hitz");
   }

   if(!validacionLema.test(inputLema.value)){
      inputLema.setCustomValidity("5 eta 40 karaktere artean");
   }

   if (selectCategoria.validity.valueMissing) {
  categoria.setCustomValidity("Kategoria derrigorrezkoa da");
    }

    if (!formInscripcion.checkValidity()) {
            formInscripcion.reportValidity(); // Nabigatzailearen pop-up mezuak erakutsi, 
            divErrores.textContent = "Error: Datu batzuk gaizki daude.";
    } else {
            divErrores.textContent = "Formularioa zinean/sisteman ondo gordeta geratu da!";
            formInscripcion.reset();
    }
});

    formInscripcion.addEventListener("mouseover", (e) => {
        btnInscribir
    });

});