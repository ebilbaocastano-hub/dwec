// EJERCICIO 3. Se corrige únicamente el JS; HTML y CSS son los originales.
const PATTERN = /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/;
let edadPersona;
let nombrePersona;
let emailPersona;
let formulario;

// Corrección 1: inicio existía, pero no se ejecutaba. Esperamos al DOM.
document.addEventListener("DOMContentLoaded", inicio);
function inicio() {
    edadPersona = document.getElementById("edad");
    nombrePersona = document.getElementById("nombre");
    emailPersona = document.getElementById("email");
    formulario = document.querySelector(".formulario");
    formulario.noValidate = true; // Gestionamos todos los errores juntos desde JS.
    // Corrección 2: querySelector da un elemento; getElementsByClassName, una colección.
    document.querySelector(".informacion").style.display = "none";
    formulario.addEventListener("submit", validarFormulario);
    // Los listeners se registran una sola vez, no al pulsar Validar repetidamente.
    document.getElementById("actividad").addEventListener("change", mostrarInformacion);
    document.querySelector('input[type="button"]').addEventListener("click", restaurar);
}
function validar() {
    const errores = [];
    // Corrección 3: se consulta value; valueMissing no es un método del input.
    if (edadPersona.value.trim() === "") errores.push("La edad es obligatoria.");
    if (nombrePersona.value.trim() === "") {
        errores.push("El nombre es obligatorio.");
    } else if (!PATTERN.test(nombrePersona.value.trim())) {
        // Corrección 4: test recibe texto y se avisa cuando NO coincide.
        errores.push("El nombre solo puede contener letras y espacios.");
    }
    if (emailPersona.value.trim() === "") errores.push("El email es obligatorio.");
    // El examen pide email obligatorio; no añade una regla de formato.
    // Correcciones 5/6: id entre comillas y textContent en un párrafo, no .value.
    document.getElementById("formError").textContent = errores.join("\n");
    document.getElementById("formError").style.whiteSpace = "pre-line";
    return errores.length === 0; // Antes faltaba devolver el resultado.
}
function validarFormulario(e) {
    e.preventDefault(); // Corrección 7: nunca se envía el formulario.
    const correcto = validar();
    // Corrección 8: mostrar la parte inferior solo cuando TODOS los campos son válidos.
    document.querySelector(".informacion").style.display = correcto ? "block" : "none";
    if (correcto) mostrarInformacion();
}
function mostrarInformacion() {
    const opcion = document.getElementById("actividad").value;
    const info = document.getElementById("info");
    const error = document.getElementById("errorAct");
    info.textContent = "";
    error.textContent = ""; // Corrección 9: limpiar los mensajes al cambiar de opción.
    if (opcion === "0") return; // Opción de ayuda, aún no hay actividad elegida.
    // Corrección 10: === compara; = asigna. El value de riesgo es "3".
    // La edad es el valor del campo convertido a número, no el propio elemento.
    if (opcion === "3" && Number(edadPersona.value) < 18) {
        error.textContent = "No puedes seleccionar esta actividad";
    } else {
        info.textContent = `Gracias ${nombrePersona.value.trim()}. Te enviamos al mail la información solicitada sobre la actividad.`;
    }
}
function restaurar() {
    formulario.reset(); // El botón original es type=button; implementamos su acción.
    document.querySelector(".informacion").style.display = "none";
    ["formError", "info", "errorAct"].forEach(id => {
        document.getElementById(id).textContent = "";
    });
}
