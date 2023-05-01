import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './Vehiculo';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculo: Array<Vehiculo> = [];
  constructor() { }
  
  ngOnInit() {
  }

}
