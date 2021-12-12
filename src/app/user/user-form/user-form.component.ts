import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user : User
  sucesso : boolean = false
  erros: string[]
  id: number
  constructor(
    private serviceUser : UserService,
    private router : Router,
    private rotaPassada : ActivatedRoute
  ) { 
    this.user = new User();
  }
  
  ngOnInit(): void {
    let params : Observable<Params> = this.rotaPassada.params

    params 
      .subscribe(urlParams =>{
        this.id = urlParams['id'];
        if(this.id){
          this.serviceUser
              .getUserById(this.id)
              .subscribe(deuCerto=>{
                this.user = deuCerto
              }, erro =>{
                this.user = new User()
              })
        }
      })
  }
  saveUser(){
    if (this.id){
          this.serviceUser
              .update(this.user)
              .subscribe( respostaComSucesso => {
                    this.sucesso = true;
                    this.erros = null;
              }, respostaComErro => {
                    this.sucesso = false;
                    this.erros = respostaComErro.error.erros;
              })
    }else{
        this.serviceUser
            .save(this.user)
            .subscribe( respostaComSucesso => {
                  this.sucesso = true;
                  this.erros = null;
                  this.user = respostaComSucesso;
            }, respostaComErro => {
                  this.sucesso = false;
                  this.erros = respostaComErro.error.erros;
            })
      }
}

backToList(){
    this.router.navigate(['/usuarios/Lista']);
}

}
