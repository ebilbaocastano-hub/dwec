// EJERCICIO 3, PARTE 2. Los tres objetos comparten los métodos de Jugador.
const jugadores = [
    new Jugador("Pepe", 3, true, true, 2),
    new Jugador("Ane", 5, false, false, 20), // El constructor corrige las balas a 0.
    new Jugador("Jon", 2, true, false, 6)
];

function imprime() {
    const seccion = document.createElement("section");
    jugadores.forEach(jugador => {
        const p = document.createElement("p");
        p.textContent = jugador.toString(); // () ejecuta el método que devuelve el texto.
        seccion.append(p);
    });
    // Añadimos una sección nueva para conservar la situación anterior y compararlas.
    document.getElementById("jugadores").append(seccion);
}
function ruletaRusa() {
    if (jugadores.length === 0) return; // Evita elegir dentro de una lista vacía.
    // random ∈ [0,1); floor(random * longitud) produce un índice válido.
    const indice = Math.floor(Math.random() * jugadores.length);
    jugadores[indice].numeroVidas = 0; // La asignación utiliza el setter.
}
imprime();
ruletaRusa();
imprime();
