export default class Cl_personal{
    constructor( nombre, tipo, sueldo){
        this.tipo = tipo;
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }
    get tipo(){
        return this._tipo;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }

}