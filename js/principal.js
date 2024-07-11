/*INFO EMPLEADOS
*En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
*determinar cuál es el monto promedio que paga por cada tipo de personal.
*Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
*el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
*$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
*gana $150:
*Monto total pagado a obreros: $270
*Promedio pagado a 3 obreros: $90
*Monto total pagado a administrativos: $350
*Promedio pagado a 2 administrativos: $175
*/ 
import Cl_personal from "./Cl_personal.js";
import Cl_empresa from "./Cl_empresa.js";
let p1 = new Cl_personal("Juan","obrero",100);
let p2 = new Cl_personal("Ana","obrero",120);
let p3 = new Cl_personal("Lin","administrativo",200);
let p4 = new Cl_personal("Mary","obrero",50);
let p5 = new Cl_personal("Carlos","administrativo",150);
let e1 = new Cl_empresa();
e1.procesarPersonal(p1);
e1.procesarPersonal(p2);
e1.procesarPersonal(p3);
e1.procesarPersonal(p4);
e1.procesarPersonal(p5);

let salida= document.getElementById("salida");

salida.innerHTML = `Monto total pagado a obreros: $${e1.montoPagoObreros()}`;
salida.innerHTML += `<br>Promedio pagado a 3 obreros: $${e1.promedioPagoObreros()}`;
salida.innerHTML +=`<br> <br>`
salida.innerHTML += `<br>Monto total pagado a administrativos: $${e1.montoPagoAdmin()}`;
salida.innerHTML += `<br>Promedio pagado a 2 administrativos: $${e1.promedioPagoAdmin()}`;