import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path: 'usuarios', component:LayoutComponent,children:[
    {path:'Form',component: UserFormComponent},
    {path: "Form/:id",component:UserFormComponent},
    {path: 'Lista',component:UserListComponent},
    {path: '', redirectTo: '/usuarios/Lista', pathMatch:'full'}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
