import { Component, Input, OnInit} from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit  {
  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;
  // porcentajeEgreso:number;
  constructor(private egresoService:EgresoService){}
  ngOnInit(): void {
    this.egresos=this.egresoService.egresos;
  }
  eliminarRegistro(egreso:Egreso){
    this.egresoService.eliminar(egreso)
  }
  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal ;
  }

}
