// EJERCICIO 1. Obtenemos los datos de las veinte filas del HTML original.
const destinos = function () {
    const nombres = [];
    document.querySelectorAll("#bidaiak tr").forEach(fila => {
        nombres.push(fila.querySelector("h3").textContent.trim());
    });
    return nombres;
};
function destinosOrdenados() {
    // Reutilizamos destinos. sort modifica este array nuevo, no la tabla del DOM.
    return destinos().sort((a, b) => a.localeCompare(b));
}
function buscarDestino() {
    // Normalizamos ambos lados: la búsqueda no distingue mayúsculas/minúsculas.
    const texto = document.getElementById("inputSearch").value.trim().toLowerCase();
    const encontrados = destinos().filter(nombre => nombre.toLowerCase().includes(texto));
    alert(encontrados.length > 0 ? encontrados.join("\n") : "No hay destinos que coincidan.");
    return encontrados; // También permite reutilizar o comprobar el resultado.
}
function destinosPrecios(incluir500 = false) {
    const viajes = [];
    // Corrección: empezar en la primera fila; no hay ninguna cabecera que saltarse.
    document.querySelectorAll("#bidaiak tr").forEach(fila => {
        const nombre = fila.querySelector("h3").textContent.trim();
        // nth-of-type(3) cuenta párrafos. nth-child(3) elegía la fecha porque hay un h3.
        const texto = fila.querySelector("p:nth-of-type(3)").textContent;
        const precio = Number.parseFloat(texto.replace("Prezioa:", "").replace("€", "").trim());
        viajes.push({ nombre, precio }); // Abreviatura de { nombre: nombre, precio: precio }.
    });
    // El enunciado dice < 500 (7 viajes), pero la captura incluye 500 (8 viajes).
    // Por defecto seguimos el texto; pasar true permite reproducir la captura.
    const baratos = viajes.filter(viaje => incluir500 ? viaje.precio <= 500 : viaje.precio < 500);
    // El comparador resta NÚMEROS; no ordena como texto ni reutiliza índices de bucles.
    return baratos.sort((a, b) => a.precio - b.precio);
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("Todos los destinos:", destinos());
    console.log("Ordenados por título:", destinosOrdenados());
    console.log("Menos de 500 €, criterio escrito (7):", destinosPrecios());
    console.log("Hasta 500 €, criterio de la captura (8):", destinosPrecios(true));
    document.getElementById("btnSearch").addEventListener("click", buscarDestino);
});
