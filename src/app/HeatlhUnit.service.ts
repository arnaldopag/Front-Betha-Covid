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
        return this.http.get<healthUnit[]>('url');
    }
  
    getHealthUnitById(id: number) : Observable<healthUnit>{
      return this.http.get<healthUnit>( `trocar apis${id}`);
    }
  
    update(healthUnit : healthUnit) : Observable<any>{
      return this.http.put<healthUnit>( `URL${healthUnit.id}`,healthUnit);
    }  
  
    delete(healthUnit : healthUnit) : Observable<any>{
      return this.http.delete<any>( `URL${healthUnit.id}`);
    }   
}