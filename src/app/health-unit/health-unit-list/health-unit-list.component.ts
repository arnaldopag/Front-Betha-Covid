import { Component, OnInit } from '@angular/core';
import { healthUnit } from '../healthUnit';
import {HealthUnitService} from 'src/app/HeatlhUnit.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-unit-list',
  templateUrl: './health-unit-list.component.html',
  styleUrls: ['./health-unit-list.component.css']
})
export class HealthUnitListComponent implements OnInit {
  healthUnit   : healthUnit[] = [];
  selectedUnit : healthUnit;
  sucesso      : string;
  erro         : string
  constructor(
    private serviceHealthUnit : HealthUnitService , 
    private route : Router,
  ) { }

  ngOnInit(): void {
    this.serviceHealthUnit
     .getHealthUnit()
     .subscribe(deuCerto =>{
       this.healthUnit = deuCerto
     })
  }
  novoCadastro(){
    this.route.navigate(['/unidades/Form']);
}

preparaDelecao(healthUnit : healthUnit){
    this.selectedUnit = healthUnit;
}

deleteHealthUnit(){
    this.serviceHealthUnit
        .delete(this.selectedUnit)
        .subscribe(respostaComSucesso => {
              this.sucesso = "Disciplina deleta com sucesso!";
              this.erro = null;
              this.ngOnInit();
        }, respostaComErro => {
              this.erro = 'Ocorreu um erro ao deletar a disciplina!';
              this.sucesso = null;
        })
}
}
