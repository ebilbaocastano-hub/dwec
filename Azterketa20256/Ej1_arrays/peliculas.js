
// Ejercicio 1 - Arrays y sintaxis básica

let peliculas = [
  { titulo: "Dune: Parte Dos", director: "Denis Villeneuve", anio: 2025, categoria: "Ciencia Ficción", valoracion: 8.5 },
  { titulo: "Inside Out 2", director: "Kelsey Mann", anio: 2023, categoria: "Animación", valoracion: 7.8 },
  { titulo: "Mufasa: The Lion King", director: "Barry Jenkins", anio: 2024, categoria: "Aventura", valoracion: 8.0 }
];

// FUNCIONES
// - mayúsculas()
// - peliculasPorCategoria(categoria)
// - buscarPorTitulo(titulo)
// - mediaValoraciones()

// a) Erakutsi tituluak letra larriz kontsolan.
const mayusculas = () => {
    peliculas.forEach(pelicula => {
        console.log(pelicula.titulo.toUpperCase());
    });
};

// b) Itzuli array berri bat soilik adierazitako kategoriako filmekin.
const peliculasPorCategoria = (categoria) => {
    return peliculas.filter(pelicula => pelicula.categoria === categoria);
};

// c) Itzuli tituluan testua duten filmak (bilaketa literala, maiuskulak eta minuskulak bereizi gabe).
const buscarPorTitulo = (titulo) => {
    return peliculas.filter(pelicula =>
      // includes metodoa erabiltzen da, eta toLowerCase metodoa erabiliz maiuskulak eta minuskulak bereizi gabe bilatzen da.
      // erabiltzaileak sartutako testua eta pelikula baten titulua biak letra larriz bihurtzen dira,
      // eta gero includes metodoa erabiltzen da testua tituluan dagoen ala ez egiaztatzeko.
        pelicula.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
};

// d) Itzuli film guztien balorazioen batez bestekoa.
const mediaValoraciones = () => {
    if (peliculas.length === 0) return 0; // Zati zero egitea saihesten du

    // reduce metodoa erabiltzen da array baten elementuak laburbiltzeko, eta kasu honetan, balorazioen batura kalkulatzeko.
    // acumulador hasieratzen da 0-rekin, eta pelikula bakoitzeko balorazioa gehitzen da.
    const sumaTotal = peliculas.reduce((acumulador, pelicula) => acumulador + pelicula.valoracion, 0);
    // Batez besteko balioa kalkulatzen du
    return sumaTotal / peliculas.length;
};

// --- EGIAZTAPENAK (Funtzioetatik kanpo, puntuak ez galtzeko) ---
mayusculas();
console.log(peliculasPorCategoria("Ciencia Ficción"));
console.log(buscarPorTitulo("Lion"));
console.log(mediaValoraciones());