import { Egreso } from "./egreso.model";

export class EgresoService{
    egresos:Egreso[]=[
        new Egreso("Renta depto",900),
        new Egreso("ropa",200)
    ]
    eliminar(egreso:Egreso){
        const indice:number =this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1)
    }
}