export default class Cl_oficina {
    constructor(montoCaja, porcComisionMensual){
        this.prestamos = [];
        this.montoCaja = montoCaja;
        this.porcComisionMensual = porcComisionMensual;
    }
    get montoCaja() {
        return this._montoCaja;
    }
    set montoCaja(montoCaja) {
        this._montoCaja = +montoCaja;
    }
    
    get porcComisionMensual() {
        return this._porcComisionMensual;
    }
    set porcComisionMensual(porcComisionMensual) {
        this._porcComisionMensual = +porcComisionMensual;
    }
    agregarPrestamo(prestamo){
        this.prestamos.push(prestamo);
    }
    quitarPrestamo(codigo){
        let indexArticulo = -1;
        for (let i = 0; i < this.prestamos.length; i++) {
            if (this.prestamos[i].codigo == codigo) {
                indexArticulo = i;
            }
        } 
        if (indexArticulo != -1) {
        this.prestamos.splice(indexArticulo, 1);
        }
    }
    modificarPrestamo(codigo, agregarPrestamo){
        let indexArticulo = -1;
        for (let i = 0; i < this.prestamos.length; i++) {
            if (this.prestamos[i].codigo == codigo) {
                indexArticulo = i;
            }
        } 
        if (indexArticulo != -1) {
        this.prestamos.splice(indexArticulo, 1, agregarPrestamo);
        }
    }
    montoFinalDisponible() { 
        let montoRestante = this.montoCaja; 
        this.prestamos.forEach((prestamo) => { montoRestante -= prestamo.prestamo; }); 
        return montoRestante;
    }
    clientesPidieron2Meses(){
        return this.prestamos.filter((prestamo) => prestamo.meses == 2);
    }
    minPrestamo(){
        let minPrestamo = this.prestamos[0].prestamo;
        for(let i= 1; i< this.prestamos.length; i++){
            if(this.prestamos[i].prestamo < minPrestamo){
                minPrestamo = this.prestamos[i].prestamo;
            }
        }
        return minPrestamo;
    }
    clientesMinimoPrestamo(){
        let minPrestamo = this.minPrestamo();
        return this.prestamos.filter((prestamo) => prestamo.prestamo == minPrestamo);
    }
}