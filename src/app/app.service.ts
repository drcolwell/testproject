import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response, ResponseContentType} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
  
@Injectable()
export class AppService {
private baseUrl: string = 'http://absolution1.com/api/ADM/';
  
private ABS_Authorization = 'abs';
private SCHEMA = 'ADM';
  
constructor(private http: Http) { }
  
getHeaders() {
let headers = new Headers();
headers.append('Authorization', this.ABS_Authorization);
headers.append('Content-Type', "application/json");
headers.append('Schema', this.SCHEMA);
// add multi-task header key
return {headers: headers};
}
  
getCatalogs(): Observable<any> {
  
// setTimeout( () => {},2000)
// let body = {"BILLING_PERIOD": BILLING_PERIOD, "SYS_ANALYST_ID": SYS_ANALYST_ID}; 
let body = {};
return this.http.get(`${this.baseUrl}GetCatalogs`, this.getHeaders())
//.debounceTime(5000)
.map((response: Response) => {
// let x:any = response.json();
return response.json();
}) // .delay(5000)
}
  
}
