import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'


import {HealthUnitService} from './HeatlhUnit.service'
import {UserService} from './user.service'
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HealthUnitModule } from './health-unit/health-unit.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TemplateModule,
    HealthUnitModule,
    UserModule
  ],
  providers: [
   UserService,
   HealthUnitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
