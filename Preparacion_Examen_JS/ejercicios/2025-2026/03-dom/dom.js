// EJERCICIO 3. El script original está en el head, por eso esperamos al DOM.
const peliculas = [{ titulo: "Matrix" }, { titulo: "El Padrino" }, { titulo: "Inception" }];
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnMostrar").addEventListener("click", mostrarPeliculas);
});
function mostrarPeliculas() {
    const lista = document.getElementById("listaPeliculas");
    lista.replaceChildren(); // Evita duplicar las tres películas al pulsar otra vez.
    peliculas.forEach(pelicula => {
        const li = document.createElement("li");
        li.textContent = pelicula.titulo;
        li.addEventListener("mouseover", e => {
            e.currentTarget.style.fontWeight = "bold"; // Se modifica la propiedad CSS.
        });
        li.addEventListener("mouseout", e => {
            e.currentTarget.style.fontWeight = "normal"; // Restauramos al salir.
        });
        lista.append(li); // El nodo no aparece hasta insertarlo en el documento.
    });
}
