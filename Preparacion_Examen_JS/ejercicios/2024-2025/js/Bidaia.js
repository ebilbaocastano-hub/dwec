// EJERCICIO 3. Nombres de propiedades compatibles con el método ya proporcionado.
class Bidaia {
    constructor(title, destination, date, price, description, category_id) {
        this.title = title;
        this.destination = destination;
        this.date = date;
        this.price = price;
        this.description = description;
        this.category_id = category_id;
    }
    // EJERCICIO 4.a. Primera versión: devuelve HTML como texto.
    bidaiaSortuta() {
        // Escapamos los datos antes de introducirlos en una cadena HTML.
        return `<h3>${escaparHTML(this.title)}</h3>
<p>Helmuga / Destino: ${escaparHTML(this.destination)}</p>
<p>Data / Fecha: ${escaparHTML(this.date)}</p>
<p>Prezioa / Precio: ${escaparHTML(this.price)} €</p>
<p>Deskripzioa / Descripción: ${escaparHTML(this.description)}</p>
<p>Kategoria / Categoría: ${escaparHTML(this.category_id)}</p>
<img src="images/default.jpg" alt="${escaparHTML(this.title)}">`;
    }
    // EJERCICIO 4.b. Misma ficha construida con nodos y las dos funciones auxiliares.
    bidaiaSortutaDOM() {
        const fragmento = document.createDocumentFragment(); // Agrupa nodos sin contenedor visible.
        fragmento.append(crearElemento("h3", this.title));
        const textos = [
            `Helmuga / Destino: ${this.destination}`,
            `Data / Fecha: ${this.date}`,
            `Prezioa / Precio: ${this.price} €`,
            `Deskripzioa / Descripción: ${this.description}`,
            `Kategoria / Categoría: ${this.category_id}`
        ];
        textos.forEach(texto => fragmento.append(crearElemento("p", texto)));
        fragmento.append(crearImagen("images/default.jpg", this.title));
        // Total: crearElemento 6 veces (h3 + 5 p), crearImagen una vez.
        return fragmento;
    }
}
function escaparHTML(valor) {
    // El orden importa: escapamos & primero para no volver a escapar las entidades.
    // Esto permite mostrar, por ejemplo, <Viaje> literalmente, también dentro del alt.
    return String(valor).replaceAll("&", "&amp;").replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
