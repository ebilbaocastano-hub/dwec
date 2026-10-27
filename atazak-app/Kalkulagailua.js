class Kalkulagailua {
    constructor() {
        this.garbitu(); // Al instanciar, reseteamos valores
    }

    garbitu() {
        this.unekoBalioa = '0'; // Lo que el usuario escribe ahora
        this.aurrekoBalioa = ''; // Lo que guardamos en memoria (ej: pulsa 5, luego +, guardamos el 5 aquí)
        this.eragiketa = undefined;
    }

    gehituZenbakia(zenbakia) {
        // Módulo 2: Evitar que pongan dos puntos decimales usando el método includes() de String
        if (zenbakia === '.' && this.unekoBalioa.includes('.')) return; 
        
        // Si hay un 0 inicial, lo sustituimos, si no, concatenamos los strings
        if (this.unekoBalioa === '0' && zenbakia !== '.') {
            this.unekoBalioa = zenbakia;
        } else {
            this.unekoBalioa = this.unekoBalioa.toString() + zenbakia.toString();
        }
    }

    aukeratuEragiketa(eragiketa) {
        if (this.unekoBalioa === '') return;
        
        // Si ya había una operación pendiente, la calculamos primero
        if (this.aurrekoBalioa !== '') {
            this.kalkulatu();
        }
        
        this.eragiketa = eragiketa;
        this.aurrekoBalioa = this.unekoBalioa;
        this.unekoBalioa = ''; // Vaciamos para que escriba el siguiente número
    }

    kalkulatu() {
        let emaitza;
        // Convertimos los strings a números decimales para operar (Módulo 2)
        const aurrekoa = parseFloat(this.aurrekoBalioa);
        const unekoa = parseFloat(this.unekoBalioa);
        
        // Si falta algún número, no hacemos nada (Módulo 1: Condicionales lógicos)
        if (isNaN(aurrekoa) || isNaN(unekoa)) return; 

        // Módulo 1: Switch en vez de muchos if/else
        switch (this.eragiketa) {
            case '+': emaitza = aurrekoa + unekoa; break;
            case '-': emaitza = aurrekoa - unekoa; break;
            case '*': emaitza = aurrekoa * unekoa; break;
            case '/': emaitza = aurrekoa / unekoa; break;
            default: return;
        }

        // Guardamos el resultado como string otra vez
        this.unekoBalioa = emaitza.toString();
        this.eragiketa = undefined;
        this.aurrekoBalioa = '';
    }

    // Método para devolver lo que se debe mostrar en pantalla 
    lortuPantailaBalioa() {
        // Conseguimos que si no hay nada escrito, se muestre el valor anterior (ej: tras pulsar +, se muestra el número anterior) y si no, se muestra lo que hay escrito ahora
        return this.unekoBalioa === '' ? this.aurrekoBalioa : this.unekoBalioa;
    }
}