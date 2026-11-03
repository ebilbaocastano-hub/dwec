/* =========================================================
   EJERCICIO 3. GALA DRAG TXURDI
   =========================================================
   - No modifiques gala.html.
   - Crea los elementos con métodos del DOM (createElement,
     appendChild...), no con innerHTML.
   - Organiza el código en funciones con una única
     responsabilidad. Puedes añadir las funciones que necesites.  (0,1 puntos)
   ========================================================= */


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


/* =========================================================
   3.1 VALIDACIÓN DEL FORMULARIO  (1,2 puntos)
   Puedes usar la API de validación (validity, setCustomValidity...)
   o tus propias comprobaciones: se valora igual.
   ========================================================= */

// a) Nombre artístico: dos palabras de letras separadas por UN único
//    espacio. Crea tú la expresión regular.                          (0,5)
function validarNombre() {
   
}

// b) Lema: entre 5 y 40 caracteres.                                  (0,2)
function validarLema() {
   
}

// c) Categoría: es obligatorio elegir una opción.                    (0,1)
function validarCategoria() {

}
const validacionNombre = /^[a-zA-Z\s]+[a-zA-Z\s]$/;
const validacionLema = /^[a-zA-Z\s]{5,40}$/;

// d) Comprueba TODOS los campos, tiene un mensaje de error propio
//    para cada campo incorrecto y devuelve true o false.             (0,4)
function validar() {
   if (!validacionNombre.test(inputNombre.value)){
      inputNombre.setCustomValidity("Letraz osatutako eta zuriune bakar batez bereizitako bi hitz");
   }
   if(!validacionLema.test(inputLema.value)){
      inputLema.setCustomValidity("5 eta 40 karaktere artean");
   }
}


/* =========================================================
   3.2 INSCRIBIR CONCURSANTES  (2,7 puntos)
   ========================================================= */

// a) Al enviar el formulario: que no se envíe y llamar a validar().  (1,0)

// b) Muestra los errores en #errores (todos juntos o uno por línea). (0,6)
function mostrarErrores(errores) {

}

// c) Crea un <li> "Miss Vanilla (glamour)" en #listaConcursantes
//    con createElement y appendChild, y vacía el formulario.         (1,1)
function crearConcursante(nombre, categoria) {

}


/* =========================================================
   3.3 AYUDA CON EL RATÓN  (1,1 puntos)
   ========================================================= */

// a) mouseover sobre #btnInscribir: muestra en #ayuda
//    "Revisa los datos antes de inscribirte".                        (0,5)
// b) mouseout: #ayuda vuelve a quedar vacío.                         (0,5)
// c) El texto se cambia con textContent.                             (0,1)
function mostrarAyuda() {

}

function ocultarAyuda() {

}


/* =========================================================
   3.4 PERSISTENCIA  (0,4 puntos)
   ========================================================= */

// b) Guarda el nombre de cada concursante que se inscribe y, al cargar
//    la página, muestra en #ultimaInscrita:
//    "Última inscrita: Miss Vanilla"                                 (0,2)
function mostrarUltimaInscrita() {

}


/* =========================================================
   EVENTOS
   Asocia aquí los eventos y lo que haya que ejecutar al cargar
   la página.
   ========================================================= */




/* =========================================================
   3.4 a) ¿Qué se muestra por consola? ¿Por qué?  (0,2 puntos)

     localStorage.setItem("votos", 5);
     console.log(localStorage.getItem("votos") + 1);

   Respuesta: 6, 5+1= 6

   ========================================================= */


/* =========================================================
   3.5 ENCUENTRA LOS FALLOS  (0,7 puntos)
   Debería mostrar un mensaje de bienvenida al pulsar #btnSaludo.
   Tiene CUATRO errores: corrígelos y explica cada uno en un
   comentario.
     a) Dos errores de gestión del evento.                       (0,6)
     b) Dos errores de acceso / manipulación del DOM.            (0,1)
   ========================================================= */
const btnSaludo = document.getElementById("#btnSaludo");
btnSaludo.addEventListener("onclick", saludar());

function saludar() {
  const p = document.createElement("p");
  p.textContent = "¡Bienvenidas a la gala Drag Txurdi!";
  document.body.appendChild("p");
}
