class AtazaKudeatzailea {
    constructor() {
        this.atazak = []; // Inicializamos array (Módulo 3)
    }

    gehituAtaza(ataza) {
        this.atazak.push(ataza); // Método de array para añadir elementos (Módulo 3)
        this.bistaratu();        // Actualizar DOM para reflejar cambios en la lista de tareas
    }

    aldatuEgoera(id) {
        // Uso de arrow functions y .find() (Módulo 3)
        const ataza = this.atazak.find(a => a.id === id); // Buscar tarea por id en el array
        if (ataza) {
            ataza.eginda = !ataza.eginda; // Cambiar estado de la tarea (true/false) para marcarla como completada o no
            this.bistaratu();
        }
    }

    ezabatuAtaza(id) {
        // Uso de .filter() (Módulo 3)
        this.atazak = this.atazak.filter(a => a.id !== id); // Filtrar tareas para eliminar la que coincide con el id proporcionado
        this.bistaratu();
    }

    // Módulo 5: Modificación del DOM
    bistaratu() {
        const zerrenda = document.getElementById('task-list');
        zerrenda.innerHTML = ''; 

        // Bucle for...of (Módulo 1)
        for (const ataza of this.atazak) { // Iteramos/Repetimos sobre el array de tareas
            const li = document.createElement('li'); // Crear Nodos
            li.className = `task-item ${ataza.eginda ? 'completed' : ''}`; // Operador ternario
            
            // Uso de Template Strings
            li.innerHTML = `
                <span>${ataza.izenburua} <em>(${ataza.lortuDataFormatua()})</em></span>
                <div class="task-actions">
                    <button onclick="kudeatzailea.aldatuEgoera(${ataza.id})">✔</button>
                    <button class="btn-delete" onclick="kudeatzailea.ezabatuAtaza(${ataza.id})">🗑</button>
                </div>
            `;
            zerrenda.appendChild(li); // Añadir Nodo
        }
    }
}