import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[] = []
  selectedUser : User
  sucesso : string
  erro : string
  constructor(
    private serviceUser : UserService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.serviceUser
        .getUser()
        .subscribe(deuCerto =>{
          this.user = deuCerto;
        })
  }
  newUser(){
    this.router.navigate(['/usuarios/Form']);
}

prepareDelete(user : User){
    this.selectedUser = user;
}

deleteUser(){
    this.serviceUser
        .delete(this.selectedUser)
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
