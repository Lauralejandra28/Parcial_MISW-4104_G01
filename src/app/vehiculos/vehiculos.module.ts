import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VehiculosComponent } from './vehiculos.component';
import { VehiculoService } from './vehiculo.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [VehiculosComponent],
  exports: [VehiculosComponent],
  
})
export class VehiculosModule { }
