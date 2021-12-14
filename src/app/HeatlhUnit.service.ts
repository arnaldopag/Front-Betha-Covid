import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { healthUnit } from "./health-unit/healthUnit";

@Injectable({
    providedIn: 'root'
})
export class HealthUnitService{
    constructor(private http: HttpClient){}

    save(healthUnit : healthUnit) : Observable<healthUnit> {
        return this.http.post<healthUnit>('URl', healthUnit)
    }
    getHealthUnit() : Observable<healthUnit[]>{
        return this.http.get<healthUnit[]>('http://localhost:8080/health-units');
    }
  
    getHealthUnitById(id: number) : Observable<healthUnit>{
      return this.http.get<healthUnit>( `http://localhost:8080/health-units/${id}`);
    }
  
    update(healthUnit : healthUnit) : Observable<any>{
      return this.http.put<healthUnit>( `http://localhost:8080/health-units/${healthUnit.id}`,healthUnit);
    }  
  
    delete(healthUnit : healthUnit) : Observable<any>{
      return this.http.delete<any>( `http://localhost:8080/health-units/${healthUnit.id}`);
    }   
}