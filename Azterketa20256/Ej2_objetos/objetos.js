
// Ejercicio 2 - OBJETOS Y CLASES

// Clase Pelicula
// Constructor con: titulo, director, anio, categoria, valoracion
// Método mostrar() -> "Matrix (1999), dirigida por Wachowski, categoría: Ciencia Ficción"

// Crear al menos 2 objetos y meterlos en un array
// Recorrer y mostrar en consola

class Pelicula {
    // Constructor con los atributos pedidos
    constructor(titulo, director, anio, categoria, valoracion) {
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.categoria = categoria;
        this.valoracion = valoracion;
    }
}

// Función para mostrar la información de la película, se le pasa un objeto de tipo Pelicula
// y devuelve un string con la información formateada
const mostrar = (pelicula) => {
    return `${pelicula.titulo} (${pelicula.anio}), dirigida por ${pelicula.director}, categoría: ${pelicula.categoria}`;
}

const matrix = new Pelicula("Matrix", "Wachowski", 1999, "Ciencia Ficción", 8.7);
const inception = new Pelicula("Inception", "Nolan", 2010, "Ciencia Ficción", 8.8);

// Array de películas
const peliculas = [matrix, inception];

// Recorrer y mostrar en consola
peliculas.forEach(pelicula => {
    // Llamada a la función mostrar() para cada película
    console.log(mostrar(pelicula));
});