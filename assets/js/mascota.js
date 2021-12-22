import { Animal } from "./animal.js";

export class Mascota extends Animal {

    constructor(nombre, direccion, telefono, tipo, nommascota, enfmascota) {
        super(nombre, direccion, telefono, tipo);
        this._nommascota = nommascota;
        this._enfmascota = enfmascota;
    }

    getNombreDeLamascota() {
        return this._nommascota;
    }

    setNombremascota(nommascota) {
        this._nommascota = nommascota;
    }

    getObtEnfermedad() {
        return this._enfmascota;
    }

    setEstEnfermedad(enfmascota) {
        this._enfmascota = enfmascota;
    }
}