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
id:any;
user:any;
constructor(private http: HttpClient) { }

getAllEtudiants(): Observable<any[]> {
  
    return this.http.get<any[]>(environment.api+"users");

}

getCurrentUser(f:any){
  let addedData = JSON.stringify(f.value);
         console.log ("addedData", addedData);
        this.http.post(environment.api+"auth/login", addedData,this.httpOptions).subscribe((res:any) => {
          localStorage.setItem("token",res.token)
          this.id=res.user;
          console.log(this.id);
          this.verify(this.id);
         },
           error => {
             //this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
           })
       ;}
       verify(id){
        this.http.get(environment.api+"users" +`/${id}`) .subscribe((res)=>{
          this.user=res['data'];
          this.user.status="actif";
          console.log(this.user);
        }) 
       }
getCustomersSmall() {
        return this.http.get<any>('assets/showcase/customers-medium.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

}