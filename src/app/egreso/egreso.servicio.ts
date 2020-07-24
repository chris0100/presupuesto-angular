import {Egreso} from './egreso.model';
import {Ingreso} from '../ingreso/ingreso.model';

export class EgresoServicio {

  egresos: Egreso[] = [
    /*new Egreso('Renta Departamento', 900),
    new Egreso('Ropa', 200)*/
  ];


  // Elimina el egreso a traves del indice seleccionado.
  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
