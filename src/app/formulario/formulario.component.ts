import { Component, Input, OnInit } from '@angular/core';
import { IngresoService } from '../ingresos/ingreso.service';
import { EgresoService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { Egreso } from '../egresos/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  tipo: string = "ingresoOperacion";
  @Input() valorInput:number;
  @Input()  descripcionInput:string;
  ngOnInit(): void {
    
  }
  constructor(private ingresoService:IngresoService,private egresoService: EgresoService){}
  tipoOperacion(evento){
    this.tipo=evento.target.value;
   }// es del video pero no anda
  agregarValor(tipoMovimiento:string){
    if(tipoMovimiento==="ingresoOperacion"){
      let ingreso =new Ingreso(this.descripcionInput,this.valorInput);
      this.ingresoService.ingresos.push(ingreso);
    }else{
      let egreso =new Egreso(this.descripcionInput,this.valorInput);
      this.egresoService.egresos.push(egreso);
    }

  }
}
