// APARTADO 3. Este script une validación, objetos, arrays y DOM.
const descargas = []; // Lista de objetos; const permite modificar su contenido.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contenedor-form").addEventListener("submit", registrarDescarga);
});

function fechaHoy() {
    const fecha = new Date();
    // getMonth empieza en 0; padStart garantiza dos dígitos en día y mes.
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    return `${dia}/${mes}/${fecha.getFullYear()}`;
}
function registrarDescarga(e) {
    e.preventDefault(); // Impide enviar incluso si los datos son incorrectos.
    if (!validar()) return; // Sin datos válidos no se crean objetos ni se suman kg.
    const select = document.getElementById("residuo");
    const opcion = select.options[select.selectedIndex];
    // value = color; text = tipo de residuo. Son datos distintos del mismo option.
    const descarga = new Descarga(
        opcion.value,
        opcion.text,
        Number(document.getElementById("kg").value),
        document.getElementById("nombre").value.trim()
    );
    const p = document.createElement("p");
    // Desde este punto trabajamos con el OBJETO y sus getters, como se pide.
    p.textContent = `${descarga.nombre} ha descargado ${descarga.kg} kg de residuo ${descarga.residuo} en el contenedor ${descarga.color} el día ${fechaHoy()}`;
    document.getElementById("descargas").append(p);
    actualizarKg(descarga);
    addArray(descargas, descarga); // Añade al principio y muestra todo por consola.
    pintarColor(p, descarga); // Reutiliza la relación residuo ↔ clase CSS.
}
function actualizarKg(descarga) {
    // Envases → envases, Vidrio → vidrio, etc. Coincide con los ids del HTML.
    // No necesitamos un if/switch para cada color.
    const acumulador = document.getElementById(descarga.residuo.toLowerCase());
    acumulador.value = Number(acumulador.value) + descarga.kg;
}
const eguneratuKg = actualizarKg;
