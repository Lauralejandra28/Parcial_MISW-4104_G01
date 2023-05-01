import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './Vehiculo';
import { VehiculoService } from './vehiculo.service';
import {dataVehiculos} from './dataVehiculos';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[] = [];

  constructor(private vehiculoService:VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos= vehiculos;
    });
  }

  ngOnInit() {
  }

}
