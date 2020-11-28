import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }

constructor(private http: HttpClient) { }

getAllEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(environment.api+"/users");

}
getCustomersSmall() {
        return this.http.get<any>('assets/showcase/customers-medium.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

}