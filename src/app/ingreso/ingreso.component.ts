import { Component, OnInit } from '@angular/core';
import {Ingreso} from './ingreso.model';
import {IngresoServicio} from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Ingreso[] = [];

  constructor(private ingresoServicio: IngresoServicio) { }


  // Carga los datos provenientes de ingresoServicios
  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos;
  }


  // Elimina el ingreso a traves del servicio
  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoServicio.eliminar(ingreso);
  }

}
