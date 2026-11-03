// EJERCICIO 2. constructor recibe los datos y los guarda en cada objeto.
class Pelicula {
    constructor(titulo, director, anio, categoria, valoracion) {
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.categoria = categoria;
        this.valoracion = valoracion;
    }
    mostrar() {
        // Devuelve el formato pedido. Retornar texto permite elegir dónde mostrarlo.
        return `${this.titulo} (${this.anio}), dirigida por ${this.director}, categoría: ${this.categoria}`;
    }
}
const peliculas = [
    new Pelicula("Matrix", "Wachowski", 1999, "Ciencia Ficción", 9),
    new Pelicula("El Padrino", "Francis Ford Coppola", 1972, "Drama", 9.2)
];
peliculas.forEach(pelicula => console.log(pelicula.mostrar()));
