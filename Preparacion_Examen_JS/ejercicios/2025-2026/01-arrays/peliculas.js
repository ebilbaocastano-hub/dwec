// EJERCICIO 1. Conservamos los datos originales, incluidos sus años.
const peliculas = [
    { titulo: "Dune: Parte Dos", director: "Denis Villeneuve", anio: 2025, categoria: "Ciencia Ficción", valoracion: 8.5 },
    { titulo: "Inside Out 2", director: "Kelsey Mann", anio: 2023, categoria: "Animación", valoracion: 7.8 },
    { titulo: "Mufasa: The Lion King", director: "Barry Jenkins", anio: 2024, categoria: "Aventura", valoracion: 8.0 }
];

// El original solo da los nombres de las funciones. Interpretaciones elegidas:
// 1) mayúsculas devuelve copias con el TÍTULO en mayúsculas; no modifica originales.
// 2) categoría es coincidencia completa ignorando mayúsculas y espacios extremos.
// 3) buscarPorTitulo permite coincidencia parcial y devuelve el primer objeto.
// 4) media de valoraciones; si la lista está vacía, devuelve 0.
function mayúsculas() {
    // map transforma cada objeto; spread copia sus propiedades y sobrescribimos titulo.
    return peliculas.map(pelicula => ({ ...pelicula, titulo: pelicula.titulo.toUpperCase() }));
    // Los paréntesis alrededor de ({...}) distinguen el objeto del cuerpo de la flecha.
}
function peliculasPorCategoria(categoria) {
    const buscada = categoria.trim().toLowerCase();
    return peliculas.filter(pelicula => pelicula.categoria.toLowerCase() === buscada);
}
function buscarPorTitulo(titulo) {
    const buscado = titulo.trim().toLowerCase();
    return peliculas.find(pelicula => pelicula.titulo.toLowerCase().includes(buscado));
    // find devuelve undefined si no encuentra nada; no devuelve un array vacío.
}
function mediaValoraciones() {
    // reduce empieza con acumulador 0 y añade una valoración en cada vuelta.
    const total = peliculas.reduce((suma, pelicula) => suma + pelicula.valoracion, 0);
    return peliculas.length > 0 ? total / peliculas.length : 0;
}
console.log("Títulos en mayúsculas:", mayúsculas());
console.log("Categoría Aventura:", peliculasPorCategoria("aventura"));
console.log("Búsqueda dune:", buscarPorTitulo("dune"));
console.log("Búsqueda inexistente:", buscarPorTitulo("no existe"));
console.log("Media:", mediaValoraciones()); // 8.1, con la aproximación habitual de Number.
