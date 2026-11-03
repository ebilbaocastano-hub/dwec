// APARTADO 1. Cada descarga será un objeto con cuatro datos relacionados.
class Descarga {
    constructor(color, residuo, kg, nombre) {
        // this identifica la instancia nueva; asignar llama a los setters.
        this.color = color;
        this.residuo = residuo;
        this.kg = kg;
        this.nombre = nombre;
    }
    // _ diferencia el almacenamiento del getter y evita llamarse recursivamente.
    get color() { return this._color; }
    set color(valor) { this._color = valor; }
    get residuo() { return this._residuo; }
    set residuo(valor) { this._residuo = valor; }
    get kg() { return this._kg; }
    set kg(valor) { this._kg = valor; }
    get nombre() { return this._nombre; }
    set nombre(valor) { this._nombre = valor; }
    mostrar() {
        return `${this.nombre} ha depositado ${this.kg} kg del residuo ${this.residuo} en el contenedor ${this.color}`;
    }
}
const Deskarga = Descarga; // Nombre del mismo constructor en la versión en euskera.
