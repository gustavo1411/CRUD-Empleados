import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';


import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    DetallesComponent,
    HomeComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class EmpleadosModule { }
