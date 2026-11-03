// EJERCICIO 1. Un array es una lista: su primer índice es 0.
// En este ejercicio el índice 0 debe guardar 1; el índice 1, 2; etc.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Recibe el array, muestra TODOS los fallos en la web y devuelve un booleano.
function comprobarArray(miArray) {
    const errores = []; // Acumulamos mensajes para no parar en el primer fallo.
    if (miArray.length !== 9) {
        errores.push("El array debe contener nueve elementos.");
    }
    // for permite consultar el valor y también su posición.
    for (let i = 0; i < miArray.length; i++) {
        const esperado = i + 1;
        // !== compara valor y tipo; el texto "4" tampoco es el número 4.
        if (miArray[i] !== esperado) {
            // Los backticks permiten insertar expresiones con ${...}.
            errores.push(`Error en la posición ${i}, hay un ${miArray[i]} cuando se esperaba un ${esperado}`);
        }
    }
    const correcto = errores.length === 0;
    const mensajes = correcto ? ["Todos los elementos están en su posición correcta."] : errores;
    mensajes.forEach(mensaje => {
        const p = document.createElement("p"); // Crea el nodo en memoria.
        p.textContent = mensaje; // Introduce texto, sin interpretarlo como HTML.
        document.getElementById("mensajes").append(p); // Lo hace visible.
    });
    return correcto; // true si no había errores; false en caso contrario.
}

// El HTML carga este script con defer: los elementos de la página ya existen.
console.log("Array correcto:", comprobarArray(numeros)); // true.
// Demostración resuelta con dos errores: deben mostrarse ambos.
console.log("Array incorrecto:", comprobarArray([1, 2, 3, 9, 5, 6, 1, 8, 9])); // false.
