class MiLista {
    constructor() {
        this._lista = [];
    }

    insertarInicio (objeto) {
        this._lista.unshift(objeto);
    }

    insertarFinal (objeto) {
        this._lista.push(objeto);
    }

    borrarInicio () {
        this._lista.shift();
    }

    borrarFinal () {
        this._lista.pop();
    }

    mostrarLista() {
        this._lista.forEach((objeto) => {
            console.log(objeto.toString());
        });
    }

    mostrarListaOrdenada() {
        let newLista = this._lista.toSorted();
        newLista.forEach((objeto) => {
            console.log(objeto.toString());  
        });
    }

    
}
