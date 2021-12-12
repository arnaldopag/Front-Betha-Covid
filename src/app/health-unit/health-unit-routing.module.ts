import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HealthUnitFormComponent } from './health-unit-form/health-unit-form.component';
import { HealthUnitListComponent } from './health-unit-list/health-unit-list.component';


const routes: Routes = [
  {path: 'unidades', component:LayoutComponent,children:[
    {path:'Form',component: HealthUnitFormComponent},
    {path: "Form/:id",component:HealthUnitFormComponent},
    {path: 'Lista',component:HealthUnitListComponent},
    {path: '', redirectTo: '/unidades/Lista', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthUnitRoutingModule { }
