// EJERCICIO 2. El HTML original no cambia; su script está en el head.
// DOMContentLoaded espera a que existan los elementos antes de seleccionarlos.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enviar").addEventListener("click", crear);
    document.getElementById("borrar").addEventListener("click", borrarUltimo);
    ["nombre", "puntuacion", "pais"].forEach(id => {
        document.getElementById(id).addEventListener("blur", e => {
            const error = errorCampo(e.currentTarget);
            if (error !== "") alert(error); // Se identifica el campo que se abandonó.
        });
    });
});

// La misma función valida nombre Y país. No duplicamos su expresión regular.
function errorCampo(campo) {
    const texto = campo.value.trim();
    const etiqueta = campo.id === "pais" ? "País" : campo.id === "nombre" ? "Nombre" : "Puntuación";
    if (texto === "") return `${etiqueta}: campo obligatorio.`;
    if (campo.id === "puntuacion") {
        const puntuacion = Number(texto); // Convertimos después de descartar el vacío.
        if (!Number.isFinite(puntuacion) || puntuacion < 0 || puntuacion > 100) {
            return "Puntuación: introduce un número entre 0 y 100.";
        }
    } else {
        // ^/$ exigen coincidencia completa; + exige uno o más caracteres.
        const patron = /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/;
        if (!patron.test(texto)) return `${etiqueta}: solo letras y espacios.`;
    }
    return ""; // No hay error en este campo.
}
function validar() {
    const errores = [];
    ["nombre", "puntuacion", "pais"].forEach(id => {
        const error = errorCampo(document.getElementById(id));
        if (error !== "") errores.push(error);
    });
    if (errores.length > 0) alert(errores.join("\n"));
    return errores.length === 0;
}
function crear() {
    if (!validar()) return; // Un formulario incorrecto no crea ninguna fila.
    const fila = document.createElement("tr");
    ["nombre", "puntuacion"].forEach(id => {
        const celda = document.createElement("td");
        celda.textContent = document.getElementById(id).value.trim();
        fila.append(celda);
    });
    const pais = document.getElementById("pais").value.trim();
    const celdaPais = document.createElement("td");
    const imagen = document.createElement("img");
    // España.png usa ñ descompuesta en el original. NFD genera esa representación.
    imagen.src = `img/${pais.normalize("NFD")}.png`;
    imagen.alt = `Bandera de ${pais}`;
    imagen.addEventListener("error", () => imagen.remove()); // País sin archivo: queda el texto.
    celdaPais.append(imagen, ` ${pais}`); // append admite nodos y texto juntos.
    fila.append(celdaPais);
    fila.addEventListener("mouseenter", colorear);
    fila.addEventListener("mouseleave", decolorear);
    const tabla = document.getElementById("participantes");
    const cuerpo = tabla.querySelector("tbody") || tabla; // El navegador puede crear tbody.
    cuerpo.append(fila);
    borrarFormulario(); // Se limpia solo tras una creación correcta.
}
function borrarFormulario() {
    ["nombre", "puntuacion", "pais"].forEach(id => {
        document.getElementById(id).value = "";
    });
}
function borrarUltimo() {
    const filas = document.querySelectorAll("#participantes tr");
    if (filas.length > 1) filas[filas.length - 1].remove(); // Conservamos las cabeceras.
}
// currentTarget es la fila que escucha el evento, aunque el ratón toque una celda.
function colorear(e) { e.currentTarget.style.backgroundColor = "red"; }
function decolorear(e) { e.currentTarget.style.backgroundColor = ""; }
