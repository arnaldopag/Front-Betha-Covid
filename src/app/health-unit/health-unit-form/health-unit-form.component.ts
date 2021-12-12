import { Component, OnInit } from '@angular/core';
import { healthUnit } from '../healthUnit';
import {HealthUnitService} from 'src/app/HeatlhUnit.service'
import { ActivatedRoute, Router,Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-health-unit-form',
  templateUrl: './health-unit-form.component.html',
  styleUrls: ['./health-unit-form.component.css']
})
export class HealthUnitFormComponent implements OnInit {

  healthUnit : healthUnit;
  sucesso : boolean = false;
  errosApi: string[];
  id: number;
  constructor(
    private serviceHealthUnit : HealthUnitService , 
    private route : Router,
    private UrlInformation : ActivatedRoute){
      this.healthUnit = new healthUnit
    }


  ngOnInit(): void {
    let params: Observable<Params> = this.UrlInformation.params;
    params.subscribe(recivedParams =>{
      this.id - recivedParams['id']
      if(this.id){
        this.serviceHealthUnit
            .getHealthUnitById(this.id)
            .subscribe(deuCerto =>{
              this.healthUnit = deuCerto
            }, deuMerda =>{
              this.healthUnit = new healthUnit()    
            })
      }
    })
  }
  saveUnit(){
    if(this.id){
      this.serviceHealthUnit
      .update(this.healthUnit)
      .subscribe(deuCerto => {
            this.sucesso = true;
            this.errosApi = null;
            this.healthUnit = deuCerto;
      }, deuMerda =>{
            this.sucesso = false;
            this.errosApi = deuMerda.error.erros;
      })                
    }else{
      this.serviceHealthUnit
      .save(this.healthUnit)
      .subscribe(deuCerto => {
            this.sucesso = true;
            this.errosApi = null;
            this.healthUnit = deuCerto;
      }, deuMerda =>{
            this.sucesso = false;
            this.errosApi = deuMerda.error.erros;
      })        
    }
  }
  backToList(){
    this.route.navigate(['/disciplinas/Lista']);
  }
}

