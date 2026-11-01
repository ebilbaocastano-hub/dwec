
// Ejercicio 3 - DOM y eventos

let peliculas = [
  { titulo: "Matrix" },
  { titulo: "El Padrino" },
  { titulo: "Inception" }
];

// DOM-a osorik kargatu arte itxarongo dugu (script-a head-en baitago defer gabe)
document.addEventListener("DOMContentLoaded", () => {

    // HTML-ko elementuak ID bidez lortu
    const btnMostrar = document.getElementById("btnMostrar");
    const listaPeliculas = document.getElementById("listaPeliculas");

    // 1. Botoia sakatzean array-a zeharkatu eta <li> elementuak erakutsi
    btnMostrar.addEventListener("click", () => {
        // Zerrenda garbitu berriro klik egitean elementuak bikoiztu ez daitezen
        listaPeliculas.innerHTML = "";

        peliculas.forEach(pelicula => {
            // <li> elementu berria sortu
            const li = document.createElement("li");
            li.textContent = pelicula.titulo;

            // 2. Sagutxoa gainetik igarotzean testua loditu (mouseenter / mouseleave)
            li.addEventListener("mouseenter", () => {
                li.style.fontWeight = "bold";
            });

            li.addEventListener("mouseleave", () => {
                li.style.fontWeight = "normal";
            });

            // Sortutako <li>-a <ul> zerrendan txertatu
            // appendChild() metodoa, elementu bat beste baten barruan txertatzeko (aita-elementuan, kasu honetan <ul> elementuan)
            listaPeliculas.appendChild(li);
        });
    });

});