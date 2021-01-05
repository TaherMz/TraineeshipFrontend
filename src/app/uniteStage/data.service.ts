import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
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
user:any=null;
nomsociete:any;
private fileList: string[] = new Array<string>();
private fileList$: Subject<string[]> = new Subject<string[]>();

constructor(private http: HttpClient,private router:Router) { }
public upload(fileName: string, fileContent: string): void {
  this.fileList.push(fileName);
  this.fileList$.next(this.fileList);
}

public download(fileName: string): void {

}
getAllEtudiants(): Observable<any[]> {
   return this.http.get<any[]>(environment.api+"users");
  // return this.http.get<any[]>(environment.api+"PostInOffer");
}

getMyOffers(name:any) {
  return this.http.get(environment.api+"offers/getmyoffers" +`/${name}`);}

getAllEtudiant(): Observable<any[]> {
   return this.http.get<any[]>(environment.api+"PostInOffer");
}


/*getMyOffers(name:any): Observable<any[]> {
  return this.http.get<any[]>(environment.api+"offers/getmyoffers" +`/${name}`);
}*/
/*getMyOffers(name:any) {
  return this.http.get(environment.api+"offers/getmyoffers" +`/${name}`);
}*/


getAllOffers(): Observable<any[]> {
  return this.http.get<any[]>(environment.api+"offers");
}

getCurrentUser(f:any){
  /*let addedData = JSON.stringify(f.value);
         console.log ("addedData", addedData);
    return this.http.post(environment.api+"auth/login", addedData,this.httpOptions).subscribe((res:any) => {
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
          this.router.navigate(['/accueil']);
          console.log(this.user);
        }) */
        this.user=f;
       }

       
editProfile(f,id){
 return this.http.patch(environment.api+"users" +`/${id}`, f);
}

public getRest(): Observable<any[]> 
{
     return this.http.get<any[]>(environment.api+"offers");
}
deleteOffer(id:any){
  return this.http.delete(environment.api+"/offers" +`/${id}`);
}


deleteMyOffer(id:any){
  return this.http.delete(environment.api+"/PostInOffer"+`/${id}`)
}




public getMyOffer(): Observable<any[]> {
  return this.http.get<any[]>(environment.api+"offers/getmyoffers" +`/${this.user.name}`);
}

public getAllmyoffers(name:any): Observable<any[]> {
  return this.http.get<any[]>(environment.api+"PostInOffer/getAllmyoffers" +`/${name}`);
}

}