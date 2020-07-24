import {Component} from '@angular/core';
import {Ingreso} from './ingreso/ingreso.model';
import {Egreso} from './egreso/egreso.model';
import {IngresoServicio} from './ingreso/ingreso.servicio';
import {EgresoServicio} from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  // Se cargan los datos al arreglo a traves de los arreglos cargados en servicios.
  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }


  getIngresoTotal(): number {
    let ingresoTotal = 0;

    this.ingresos.forEach(objIngreso => {
      ingresoTotal += objIngreso.valor;
    });

    return ingresoTotal;
  }


  getEgresoTotal(): number {
    let egresoTotal: number = 0;

    this.egresos.forEach(objEgreso => {
      egresoTotal += objEgreso.valor;
    });

    return egresoTotal;
  }


  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }


  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }


}
