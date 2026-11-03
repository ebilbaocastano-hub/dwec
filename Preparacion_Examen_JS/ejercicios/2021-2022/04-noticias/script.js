// EJERCICIO 4. Crear nodos permite construir la noticia sin concatenar HTML.
const formulario = document.getElementById("formNoticias");
formulario.addEventListener("submit", crearNoticia);

function crearNoticia(e) {
    e.preventDefault(); // Procesamos en el navegador y conservamos las noticias previas.
    const titulo = document.getElementById("titulo").value.trim();
    const texto = document.getElementById("texto").value.trim();
    const periodista = document.getElementById("periodista");
    const url = document.getElementById("url");
    const error = document.getElementById("error");
    if (titulo === "" || texto === "") {
        error.textContent = "El título y la noticia son obligatorios.";
        return; // No creamos ningún nodo de noticia si falta información.
    }
    // El input URL comprueba su formato si se ha rellenado; vacío es opcional.
    if (!url.reportValidity()) return;
    error.textContent = "";

    const articulo = document.createElement("article"); // Unidad autónoma: una noticia.
    articulo.classList.add(periodista.value); // Valor del select = clase CSS de periodista.
    const h3 = document.createElement("h3");
    const enlace = document.createElement("a");
    enlace.textContent = titulo;
    enlace.href = url.value || "#"; // Si no se escribió URL, enlace al propio documento.
    h3.append(enlace); // El enlace queda DENTRO del título.

    const h2 = document.createElement("h2");
    const nombre = periodista.options[periodista.selectedIndex].text;
    h2.textContent = `${nombre} - ${new Date().toLocaleDateString("es-ES")}`;
    const p = document.createElement("p");
    p.textContent = texto;
    // La rúbrica menciona la clase en el párrafo; también la aplicamos a la noticia.
    p.classList.add(periodista.value);
    articulo.append(h3, h2, p);
    document.getElementById("noticias").append(articulo);
    formulario.reset(); // Restaura los valores iniciales, sin borrar noticias publicadas.
}
