// APARTADO 2. Recibe el array y el objeto; no crea una lista distinta.
function addArray(array, elemento) {
    array.unshift(elemento); // Añade al PRINCIPIO, como exige el enunciado.
    mostrarArray(array); // Reutilizamos la función de presentación.
}
function mostrarArray(array) {
    // Cada elemento es Descarga: usamos su método, no reconstruimos la frase.
    array.forEach(descarga => console.log(descarga.mostrar()));
}
const gehituArray = addArray; // Equivalencias de nombres, sin repetir código.
const erakutsiArray = mostrarArray;
