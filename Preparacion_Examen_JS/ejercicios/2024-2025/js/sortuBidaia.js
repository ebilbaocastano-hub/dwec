// EJERCICIOS 3 Y 4. Controlador del formulario y funciones de creación de nodos.
const bidaiakArray = [];
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    formulario.noValidate = true; // Validamos con nuestras funciones y mensajes conjuntos.
    formulario.addEventListener("submit", sortuBidaia); // Funciona con botón y con Enter.
});
function sortuBidaia(event) {
    event.preventDefault(); // El action del original apunta a PHP: no hay que enviarlo.
    if (!validarFormulario()) {
        alert(erroresValidacion.join("\n"));
        return; // No se crea el objeto, no se guarda ni se modifica la ficha.
    }
    const viaje = new Bidaia(
        document.getElementById("title").value.trim(),
        document.getElementById("destination").value.trim(),
        document.getElementById("date").value,
        Number(document.getElementById("price").value),
        document.getElementById("description").value.trim(),
        document.getElementById("category_id").value
    );
    bidaiakArray.push(viaje); // Añadir el objeto, no una cadena que lo describa.
    const contenedor = document.getElementById("mensaje");
    contenedor.innerHTML = viaje.bidaiaSortuta(); // Versión original con plantilla HTML.
    // Mostramos después la versión DOM en el mismo sitio: sustituye la ficha anterior.
    // Se ejecutan ambas formas solicitadas, pero no se duplica el viaje en la pantalla.
    contenedor.replaceChildren(viaje.bidaiaSortutaDOM());
}
const crearElemento = function (etiqueta, texto) {
    const elemento = document.createElement(etiqueta);
    elemento.textContent = texto; // El texto del formulario se muestra como texto plano.
    return elemento;
};
const crearImagen = function (ruta, textoAlt) {
    const imagen = document.createElement("img");
    imagen.src = ruta;
    imagen.alt = textoAlt;
    return imagen;
};
