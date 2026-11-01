
// Ejercicio 4 - Validación de formulario

  // Validaciones a implementar:
  // - titulo y director: entre 3 y 50 caracteres
  // - anio: numérico de 4 dígitos entre 1900 y 2099
  // - categoria: no vacía

  // Al enviar el formulario, mostrar mensajes de error o éxito en el div#mensaje

  // Ejercicio 4 - Validación de formulario

document.addEventListener("DOMContentLoaded", () => {

    // HTML elementuak beren ID bidez lortu
    const formPelicula = document.getElementById("formPelicula");
    const inputTitulo = document.getElementById("titulo");
    const inputDirector = document.getElementById("director");
    const inputAnio = document.getElementById("anio");
    const selectCategoria = document.getElementById("categoria");
    const divMensaje = document.getElementById("mensaje");

    // Formularioa bidaltzean (submit gertaera) balioztapena exekutatu
    formPelicula.addEventListener("submit", (e) => {
        // e.preventDefault(): Orria berriro kargatzea saihesten du bidaltzean
        e.preventDefault();

        // Akatsen mezuak gordetzeko array-a
        const errores = [];

        // Eremuen balioak lortu eta muturretako espazio hutsak kendu (.trim())
        const titulo = inputTitulo.value.trim();
        const director = inputDirector.value.trim();
        const anio = inputAnio.value.trim();
        const categoria = selectCategoria.value;

        // 1. Titulua: 3 eta 50 karaktere artean
        if (titulo.length < 3 || titulo.length > 50) {
            errores.push("Titulua 3 eta 50 karaktere artean egon behar da.");
        }

        // 2. Zuzendaria: 3 eta 50 karaktere artean
        if (director.length < 3 || director.length > 50) {
            errores.push("Zuzendaria 3 eta 50 karaktere artean egon behar da.");
        }

        // 3. Urtea: zenbakizko 4 digitu, 1900 eta 2099 artean
        const anioNumero = parseInt(anio, 10);
        const esCuatroDigitos = /^\d{4}$/.test(anio); // Adierazpen erregularra (4 digitu bakarrik)

        if (!esCuatroDigitos || isNaN(anioNumero) || anioNumero < 1900 || anioNumero > 2099) {
            errores.push("Urteak 4 digituko zenbakia izan behar du (1900-2099 artean).");
        }

        // 4. Kategoria: ez ditzala hutsik egon
        if (categoria === "") {
            errores.push("Kategoria bat hautatu behar duzu.");
        }

        // Emaitza div#mensaje elementuan erakutsi
        if (errores.length > 0) {
            // Akatsak daudenean: testua gorriz jarri eta zerrenda bat (ul/li) erakutsi
            divMensaje.style.color = "red";
            divMensaje.innerHTML = `<ul>${errores.map(err => `<li>${err}</li>`).join("")}</ul>`;
        } else {
            // Dena ondo badago: testua berdez jarri eta mezu positiboa bistaratu
            divMensaje.style.color = "green";
            divMensaje.innerHTML = "<p>Formularioa zinean/sisteman ondo gordeta geratu da!</p>";

            // Formularioaren testu-eremu guztiak garbitu
            formPelicula.reset();
        }
    });

});