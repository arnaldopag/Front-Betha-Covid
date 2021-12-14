import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {User} from './user/user'
@Injectable({
    providedIn : 'root'
})
export class UserService{
    constructor(private http : HttpClient){}
    
    save(user : User): Observable<User> {
       
        return this.http.post<User>('http://localhost:8080',user)
    }
  
    getUserById(codigoDoId: number) : Observable<User>{
        const header = new Headers()
        header.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJhZG1pbiIsImV4cCI6MTYzOTUyNjIzNH0.4GwC8cWuD9X7rVeoQFbNmfCKKWO7HjEJ_rjNHKJM6YA');
        return this.http.get<User>(`http://localhost:8080/users/1`,user,{headers : header});
    }
  
    update(user: User): Observable<any>{
        const header = new Headers()
        header.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJhZG1pbiIsImV4cCI6MTYzOTUyNjIzNH0.4GwC8cWuD9X7rVeoQFbNmfCKKWO7HjEJ_rjNHKJM6YA');
        return this.http.put<User>(`http://localhost:8080/users/${user.id}`, user,{headers: header});
    }  
  
    delete(user: User): Observable<any>{
        const header = new Headers()
        header.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJhZG1pbiIsImV4cCI6MTYzOTUyNjIzNH0.4GwC8cWuD9X7rVeoQFbNmfCKKWO7HjEJ_rjNHKJM6YA');
      return this.http.delete<any>(`http://localhost:8080/users/${user.id}`,{headers: header});
  }   



}