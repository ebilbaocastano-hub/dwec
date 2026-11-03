// EJERCICIO 2. Todas las funciones de este archivo devuelven booleanos.
const erroresValidacion = []; // Mensajes que el controlador mostrará en un solo alert.
function validarLongitud(id, minimo, maximo, etiqueta) {
    const texto = document.getElementById(id).value.trim();
    const correcto = texto.length >= minimo && texto.length <= maximo;
    if (!correcto) erroresValidacion.push(`${etiqueta}: entre ${minimo} y ${maximo} caracteres.`);
    return correcto;
}
function validarTitulo() { return validarLongitud("title", 3, 50, "Título"); }
function validarDestino() { return validarLongitud("destination", 3, 50, "Destino"); }
function validarDescripcion() { return validarLongitud("description", 3, 500, "Descripción"); }
function validarPrecio() {
    const texto = document.getElementById("price").value.trim();
    const precio = Number(texto);
    // Comprobar el vacío evita aceptar Number("") = 0 como si se hubiera escrito un 0.
    const correcto = texto !== "" && Number.isFinite(precio) && precio >= 0 && precio <= 9999;
    if (!correcto) erroresValidacion.push("Precio: introduce un número entre 0 y 9999.");
    return correcto;
}
function validarFecha() {
    const texto = document.getElementById("date").value;
    const fecha = new Date(`${texto}T00:00:00`); // Fecha introducida a medianoche LOCAL.
    const ahora = new Date();
    const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    // Hoy es válido: eliminamos la hora actual para no rechazar esta misma fecha.
    const correcto = texto !== "" && !Number.isNaN(fecha.getTime()) && fecha >= hoy;
    if (!correcto) erroresValidacion.push("Fecha: debe ser hoy o un día posterior.");
    return correcto;
}
function validarCategoria() {
    const valor = document.getElementById("category_id").value;
    const correcto = ["1", "2", "3", "4", "5", "6", "7", "8"].includes(valor);
    if (!correcto) erroresValidacion.push("Categoría: elige una opción válida.");
    return correcto;
}
function validarFormulario() {
    erroresValidacion.length = 0; // Vacía los mensajes de la comprobación anterior.
    // Evaluamos TODAS las llamadas antes de every: así recogemos todos los errores.
    // Una cadena validarTitulo() && validarDestino()... se pararía en el primer false.
    const resultados = [validarTitulo(), validarDestino(), validarPrecio(), validarDescripcion(), validarFecha(), validarCategoria()];
    return resultados.every(resultado => resultado);
}
