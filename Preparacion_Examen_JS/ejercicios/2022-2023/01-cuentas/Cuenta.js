// EJERCICIO 1. # crea un campo privado: solo lo usa esta clase.
class Cuenta {
    #cantidad;
    constructor(titular = "", cantidad = 0) {
        // Se permite constructor vacío: el titular queda pendiente para poder operar.
        this.titular = titular;
        this.#cantidad = Number.isFinite(cantidad) && cantidad >= 0 ? cantidad : 0;
    }
    // get se lee como propiedad; set se ejecuta al asignarla.
    get titular() { return this._titular; }
    set titular(valor) { this._titular = valor.trim(); }
    get cantidad() { return this.#cantidad; }
    set cantidad(valor) {
        // Se pide setter, pero se prohíbe cambiar directamente el saldo: lo rechazamos.
        throw new Error("Usa ingresar() o retirar() para modificar la cantidad.");
    }
    ingresar(cantidad) {
        if (this.titular === "" || !Number.isFinite(cantidad) || cantidad < 0) return false;
        this.#cantidad += cantidad; // Equivale a saldo = saldo + cantidad.
        return true;
    }
    retirar(cantidad) {
        // Si la cantidad es inválida o supera el saldo, no se modifica nada.
        if (this.titular === "" || !Number.isFinite(cantidad) || cantidad < 0 || cantidad > this.#cantidad) return false;
        this.#cantidad -= cantidad;
        return true;
    }
    mostrar() {
        // toFixed devuelve TEXTO con dos decimales para presentarlo.
        return `Titular: ${this.titular || "pendiente"}. Saldo: ${this.cantidad.toFixed(2)} €`;
    }
    // Equivalencias del enunciado en euskera, sin duplicar las operaciones.
    display() { return this.mostrar(); }
    sartu(cantidad) { return this.ingresar(cantidad); }
    kendu(cantidad) { return this.retirar(cantidad); }
}
const kontua = Cuenta; // Otro nombre para el mismo constructor.
