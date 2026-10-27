class Ataza {
    // Parámetros por defecto (Módulo 3)
    constructor(izenburua, eginda = false, data = new Date()) {

        // Uso de Math (Módulo 2)
        this.id = Math.floor(Math.random() * 1000000); 
        this.izenburua = izenburua;
        this.eginda = eginda;
        // Uso de Date (Módulo 2)
        this.data = data instanceof Date ? data : new Date(data);
    }

    // Método propio de la clase
    lortuDataFormatua() {
        // String methods (padStart) y métodos Date
        // Conseguimos el día y el mes con dos dígitos y los devolvemos en formato "dd/mm"
        const eguna = String(this.data.getDate()).padStart(2, '0');
        const hilabetea = String(this.data.getMonth() + 1).padStart(2, '0');
        return `${eguna}/${hilabetea}`;
    }
}