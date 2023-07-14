import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import db from '../../db.json'



@Injectable({ providedIn: 'root' })
export class CommonService {
    constructor(private http: HttpClient){

    }
    login(data:any):Observable<any>{
     let database=db;
     let status:any={};
     database.map(i=>{
       if(i.email==data.email && i.passowrd==data.password){
        status={status:200,data:i}
       }
     })
     return status
    }

 
    
}



