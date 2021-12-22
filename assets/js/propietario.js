export class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    datosPropietarios() {
        return `El nombre del propietario es: ${this._nombre}, su direccion es: ${this._direccion} y su telefono es: ${this._telefono}`;
    }
}