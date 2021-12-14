import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string;
  password: string;
  loginError: boolean;
  newUser: boolean;

  constructor(private minhaRota: Router) { }

  validarUsuario(){
      this.minhaRota.navigate(["/home"]);
  }

  preparaParaCadastrar(event){
      event.preventDefault();
      this.newUser = true;
  }

  cancelaCadastro(){
      this.newUser = false;
  }


}
