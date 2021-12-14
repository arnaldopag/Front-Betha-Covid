import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {User} from './user/user'
@Injectable({
    providedIn : 'root'
})
export class UserService{




    constructor(private http : HttpClient){





    }
    
    save(user : User): Observable<User> {
       
        return this.http.post<User>('http://localhost:8080/users',{...user, 
        roles : [{ id : 2}]
        }, {
            headers : {
                'Authorization' : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJhZG1pbiIsImV4cCI6MTYzOTUyNjIzNH0.4GwC8cWuD9X7rVeoQFbNmfCKKWO7HjEJ_rjNHKJM6YA",
            }
        })
    }

    getUser() : Observable<User[]> {

        return this.http.get<User[]>("http://localhost:8080/users",{
            headers : {
                'Authorization' : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJhZG1pbiIsImV4cCI6MTYzOTUyNjIzNH0.4GwC8cWuD9X7rVeoQFbNmfCKKWO7HjEJ_rjNHKJM6YA",
            }
        })
    }
  
    getUserById(codigoDoId: number) : Observable<User>{
        return this.http.get<User>(`http://localhost:8080/users/${codigoDoId}`);
    }
  
    update(user: User): Observable<User>{
        return this.http.put<User>(`http://localhost:8080/users/${user.id}`, user,{
            headers : {
                'Authorization' : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJhZG1pbiIsImV4cCI6MTYzOTUyNjIzNH0.4GwC8cWuD9X7rVeoQFbNmfCKKWO7HjEJ_rjNHKJM6YA"
            }
        });
    }  
  
    delete(user: User): Observable<any>{
        return this.http.delete<any>(`http://localhost:8080/users/${user.id}`,{
            headers : {
                'Authorization' : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJhZG1pbiIsImV4cCI6MTYzOTUyNjIzNH0.4GwC8cWuD9X7rVeoQFbNmfCKKWO7HjEJ_rjNHKJM6YA"
            }
      });
  }   



}