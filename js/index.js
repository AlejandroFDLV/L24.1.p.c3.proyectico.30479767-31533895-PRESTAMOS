/* Se desea llevar un control de los préstamos que 
realiza una oficina. Se tiene por cada préstamo: nombre 
del cliente, código del préstamo, monto y cantidad de 
meses. Se requiere de un programa que permita el 
registro de esta información, conociendo al principio de 
la ejecución el monto disponible para préstamos y el 
porcentaje de comisión mensual que se cobrará. 
Estructuras de datos recomendadas 
Cl_oficina: montoCaja, porcComisionMensual 
Cl_prestamo: cliente, codigo, prestamo, meses 
Primeros requerimientos 
Los datos entrada vienen en un archivo (con 
import... ver anexo) 
Monto final disponible 
Clientes que pidieron por 2 meses 
Clientes que pidieron el préstamo mínimo */


import Dt_oficina from "./Dt_oficina.js";
import Dt_pretamos from "./Dt_prestamos.js";
import Cl_oficina from "./Cl_oficina.js";
import Cl_prestamos from "./Cl_prestamos.js";

    let oficina = new Cl_oficina(Dt_oficina.montoDisponible, Dt_oficina.porcComisionMensual);

    Dt_pretamos.forEach((prestamo) => oficina.agregarPrestamo(new Cl_prestamos(prestamo.cliente, prestamo.codigo, prestamo.prestamo, prestamo.meses)));


    let clientesPidieron2Meses = () => {
        let prestamos = oficina.clientesPidieron2Meses();
        salida2.innerHTML = `<br>Clientes que pidieron por 2 meses:`;
        prestamos.forEach((prestamo) => salida2.innerHTML += `<br>${prestamo.cliente} ${prestamo.codigo} ${prestamo.prestamo} ${prestamo.meses}`);
    };

    let clientesMinimoPrestamo = () => {
        let prestamos = oficina.clientesMinimoPrestamo();
        salida2.innerHTML = `<br>Clientes que pidieron el prestamo minimo: `;
        prestamos.forEach((prestamo) => salida2.innerHTML += `<br>${prestamo.cliente} ${prestamo.codigo} ${prestamo.prestamo} ${prestamo.meses}`);
    };
    let agregarPrestamo = () => {
        let cliente = prompt("Ingrese el nombre del cliente");
        let codigo = prompt("Ingrese el codigo del prestamo");
        let prestamo = prompt("Ingrese el prestamo");
        let meses = prompt("Ingrese la cantidad de meses");
        oficina.agregarPrestamo(new Cl_prestamos(cliente, codigo, prestamo, meses));
        alert("Prestamo agregado, recargue la pagina y seleccione la opcion 7");
    };
    let quitarPrestamo = () => {
        let codigo = prompt("Ingrese el codigo del prestamo a quitar");
        oficina.quitarPrestamo(codigo);
        alert("Prestamo quitado, recargue la pagina y seleccione la opcion 7");
    };
    let modificarPrestamo = () => {
        let codigo = prompt("Ingrese el codigo del prestamo a modificar");
        alert("Ingrese los nuevos datos");
        let cliente = prompt("Ingrese el nombre del cliente");
        let prestamo = prompt("Ingrese el prestamo");
        let meses = prompt("Ingrese la cantidad de meses");
        oficina.modificarPrestamo(codigo, new Cl_prestamos(cliente, codigo, prestamo, meses));
        alert("Prestamo modificado, recargue la pagina y seleccione la opcion 7");
    };
    let listarPrestamos = () => {
        let prestamos = oficina.prestamos;
        let salidaTmp = ` <br>Lista de prestamos:
        <br><table>
        <tr>
        <th>Cliente</th>
        <th>Codigo</th>
        <th>Prestamo</th>
        <th>Meses</th>
        </tr>
        `;
        prestamos.forEach((prestamo) => {
            salidaTmp += `<tr>
            <td>${prestamo.cliente}</td>
            <td>${prestamo.codigo}</td>
            <td>${prestamo.prestamo}</td>
            <td>${prestamo.meses}</td>
            </tr>`;
        });
        salidaTmp += `</table>`;
        salida2.innerHTML = salidaTmp;
    };
    let salida1 = document.getElementById("salida1");
    let salida2 = document.getElementById("salida2");
    let opciones = document.getElementById("opciones");
    salida1.innerHTML = `
    Seleccione su opcion:
    <br> 1 = Monto final disponible
    <br> 2 = Clientes que pidieron por 2 meses
    <br> 3 = Clientes que pidieron el prestamo minimo
    <br> 4 = Agregar prestamo
    <br> 5 = Quitar prestamo
    <br> 6 = Modificar prestamo
    <br> 7 = Listar prestamos
    `;
    opciones.onclick = () => {
        let opcion = prompt("Seleccione su opcion");
        switch (opcion) {
            case "1":
                salida2.innerHTML = `<br>Monto final disponible: ${oficina.montoFinalDisponible()}`;
                break;
            case "2":
                clientesPidieron2Meses();
                break;
            case "3":
                clientesMinimoPrestamo();
                break;
            case "4":
                agregarPrestamo();
                break;
            case "5":
                quitarPrestamo();
                break;
            case "6":
                modificarPrestamo();
                break;
            case "7":
                listarPrestamos();
                break;
        }
    }



