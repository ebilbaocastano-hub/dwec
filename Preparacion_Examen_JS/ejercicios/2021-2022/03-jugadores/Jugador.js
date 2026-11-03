// EJERCICIO 3, PARTE 1. Una clase es el molde; new crea cada instancia.
class Jugador {
    constructor(nombre, numeroVidas, tienePistola, tieneGranada, numeroBalas) {
        // Asignar a estas propiedades llama a los setters escritos más abajo.
        this.nombre = nombre;
        this.numeroVidas = numeroVidas;
        this.tienePistola = tienePistola; // Antes de las balas: las condiciona.
        this.tieneGranada = tieneGranada;
        this.numeroBalas = numeroBalas;
    }
    // _ es una convención para el almacenamiento interno, no privacidad real.
    // get permite leer jugador.nombre sin paréntesis; set recibe la asignación.
    get nombre() { return this._nombre; }
    set nombre(valor) { this._nombre = valor; }
    get numeroVidas() { return this._numeroVidas; }
    set numeroVidas(valor) {
        this._numeroVidas = Number.isInteger(valor) && valor >= 0 ? valor : 0;
    }
    get tienePistola() { return this._tienePistola; }
    set tienePistola(valor) {
        this._tienePistola = Boolean(valor);
        // Invariante: al perder la pistola también desaparecen las balas.
        if (!this._tienePistola) this._numeroBalas = 0;
    }
    get tieneGranada() { return this._tieneGranada; }
    set tieneGranada(valor) { this._tieneGranada = Boolean(valor); }
    get numeroBalas() { return this._numeroBalas; }
    set numeroBalas(valor) {
        // && exige ambas condiciones. Solo aceptamos enteros no negativos con pistola.
        this._numeroBalas = this.tienePistola && Number.isInteger(valor) && valor >= 0 ? valor : 0;
    }
    toString() {
        const arma = this.tienePistola ? `tiene pistola con ${this.numeroBalas} balas` : "no tiene pistola";
        const granada = this.tieneGranada ? "tiene granada" : "no tiene granada";
        return `El jugador ${this.nombre} tiene ${this.numeroVidas} vidas, ${arma} y ${granada}.`;
    }
}
