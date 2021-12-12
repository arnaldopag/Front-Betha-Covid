import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthUnitRoutingModule } from './health-unit-routing.module';
import { HealthUnitFormComponent } from './health-unit-form/health-unit-form.component';
import { HealthUnitListComponent } from './health-unit-list/health-unit-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HealthUnitFormComponent, HealthUnitListComponent],
  imports: [
    CommonModule,
    HealthUnitRoutingModule, 
    FormsModule
  ],
  exports:[
    HealthUnitFormComponent,
    HealthUnitListComponent
  ]
})
export class HealthUnitModule { }
