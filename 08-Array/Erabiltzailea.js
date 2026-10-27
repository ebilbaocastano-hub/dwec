class Erabiltzailea {
    #izena;
    #abizenak;
    #NAN;
    #urtea;
    #probintzia;

    constructor(izena, abizena, nan, jaiotzeUrtea, probintzia) {
        this._izena = izena;
        this._abizena = abizena;
        this._nan = nan;
        this._jaiotzeUrtea = jaiotzeUrtea;
        this._probintzia = probintzia;
    }
    get izena(){return this._izena}
    get abizena(){return this._abizena}
    get nan(){return this._nan}
    get jaiotzeUrtea(){return this._jaiotzeUrtea}
    get probintzia(){return this._probintzia}

    set izena(izena){this._izena=izena}
    set abizena(abizena){this._abizena=abizena}
    set nan(nan){this._nan=nan}
    set jaiotzeUrtea(jaiotzeUrtea){this._jaiotzeUrtea=jaiotzeUrtea}
    set probintzia(probintzia){this._probintzia=probintzia}

    sortuLogin() {
        let primeraLetra = this._izena.charAt(0);
        let apellido = this._abizena.slice(-2);
        let urtearen2azken = String(this._jaiotzeUrtea).slice(-2);

        return `${primeraLetra}${apellido}${urtearen2azken}`;
    }

    getAdina() {
        const URTEA = new Date().getFullYear();
        return URTEA - this._jaiotzeUrtea;
    }

    toString() {
        return `Izena: ${this._izena}, Abizena: ${this._abizena}, NAN: ${this._nan}, Jaiotze Urtea: ${this._jaiotzeUrtea}, Probintzia: ${this._probintzia}, Adina: ${this.getAdina()}`;
    }
    
    toHtml() {
        return `<p>Izena: ${this._izena}</p>
                <p>Abizena: ${this._abizena}</p>
                <p>NAN: ${this._nan}</p>
                <p>Jaiotze Urtea: ${this._jaiotzeUrtea}</p>
                <p>Probintzia: ${this._probintzia}</p>`;
    }
}