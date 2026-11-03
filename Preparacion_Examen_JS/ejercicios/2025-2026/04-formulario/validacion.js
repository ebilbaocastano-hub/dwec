// EJERCICIO 4. Mensajes dentro de div#mensaje, no mediante alert.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formPelicula").addEventListener("submit", validarPelicula);
    document.getElementById("mensaje").style.whiteSpace = "pre-line";
});
function validarPelicula(e) {
    e.preventDefault(); // Comprobación local: nunca se abandona la página.
    const errores = [];
    // La misma regla sirve para título y director; reutilizamos el bucle.
    ["titulo", "director"].forEach(id => {
        const texto = document.getElementById(id).value.trim();
        if (texto.length < 3 || texto.length > 50) {
            errores.push(`${id}: debe tener entre 3 y 50 caracteres.`);
        }
    });
    const textoAnio = document.getElementById("anio").value.trim();
    const anio = Number(textoAnio);
    // La regex exige CUATRO dígitos: no acepta "2e3", "2000.0" ni "2000abc".
    if (!/^\d{4}$/.test(textoAnio) || anio < 1900 || anio > 2099) {
        errores.push("anio: cuatro dígitos entre 1900 y 2099.");
    }
    if (document.getElementById("categoria").value === "") {
        errores.push("categoria: elige una opción.");
    }
    document.getElementById("mensaje").textContent = errores.length === 0
        ? "Película validada correctamente."
        : errores.join("\n");
    return errores.length === 0;
}
