export default class Cl_empresa{
    constructor(){
        this.contObreros=0;
        this.contAdmin=0;
        this.acumPagoObreros=0;
        this.acumPagoAdmin=0;
      
    }
    procesarPersonal(per){
        if(per.tipo=="obrero"){
            this.acumPagoObreros+=per.sueldo;
            this.contObreros++;
        }else if(per.tipo=="administrativo"){
            this.acumPagoAdmin+=per.sueldo;
            this.contAdmin++;
    }
}
montoPagoObreros(){
    return this.acumPagoObreros;
}
promedioPagoObreros(){
    return this.acumPagoObreros/this.contObreros;
}
montoPagoAdmin(){
    return this.acumPagoAdmin;
}
promedioPagoAdmin(){
    return this.acumPagoAdmin/this.contAdmin;
}
}