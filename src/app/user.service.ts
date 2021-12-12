import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {User} from './user/user'
@Injectable({
    providedIn : 'root'
})
export class UserService{
    constructor(private http : HttpClient){}

    save(user : User): Observable<User> {
        return this.http.post<User>('url',user)
    }
    getUser() : Observable<User[]>{
        return this.http.get<User[]>('Url');
    }
  
    getUserById(codigoDoId: number) : Observable<User>{
        return this.http.get<User>(`URL${codigoDoId}`);
    }
  
    update(user: User): Observable<any>{
        return this.http.put<User>(`URL/${user.id}`, user);
    }  
  
    deletar(user: User): Observable<any>{
      return this.http.delete<any>(`URL/${user.id}`);
  }   



}