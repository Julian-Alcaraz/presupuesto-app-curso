import { Ingreso } from "../ingresos/ingreso.model";

export class IngresoService{
    ingresos:Ingreso[]=[
        new Ingreso("salario",4000),
        new Ingreso("Venta de coche",500)
    ]
    eliminar(ingreso:Ingreso){
        const indice=this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}