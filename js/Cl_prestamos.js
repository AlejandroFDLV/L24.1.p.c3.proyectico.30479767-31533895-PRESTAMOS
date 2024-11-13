export default class Cl_prestamos {
    constructor(cliente, codigo, prestamo, meses){
        this.cliente = cliente;
        this.codigo = codigo;
        this.prestamo = prestamo;
        this.meses = meses;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    
    get codigo() {
        return this._codigo;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    
    get prestamo() {
        return this._prestamo;
    }
    set prestamo(prestamo) {
        this._prestamo = +prestamo;
    }
    
    get meses() {
        return this._meses;
    }
    set meses(meses) {
        this._meses = +meses;
    }
}