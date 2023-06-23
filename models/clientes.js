class Cliente {

    constructor(clienteId, nombreDeCompania, nombreDeContacto) {
        this._clienteId = clienteId;
        this._nombreDeCompania = nombreDeCompania;
        this._nombreDeContacto = nombreDeContacto;
    }

    get clienteId() {
        return this._clienteId;
    }

    set clienteId(clienteId) {
        this._clienteId = clienteId;
    }

    get nombreDeCompania() {
        return this._nombreDeCompania;
    }

    set nombreDeCompania(nombreDeCompania) {
        this._nombreDeCompania = nombreDeCompania;
    }

    get nombreDeContacto() {
        return this._nombreDeCompania;
    }

    set nombreDeContacto(nombreDeContacto) {
        this._nombreDeCompania = nombreDeContacto;
    }

}

module.exports = Cliente;