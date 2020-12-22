import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';






@Component({
  selector: 'app-postuler-offre',
  templateUrl: './postuler-offre.component.html',
  styleUrls: ['./postuler-offre.component.css'],
  providers: [MessageService]
})

export class PostulerOffreComponent implements OnInit {


nomsociete?:any="";
tel?:any="";
datedebut?:any;
datefin?:any;
mission?:any="";
categories?:any="";
profil?:any="";
status?:any="en attente";
enabled?:boolean;

identifiant:any;
  societe?:any;
  notSame:boolean=false;

httpOptions = { 
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
  })
}



  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) {
    
   }


  ngOnInit(): void {
    this.societe =this.dataService.user;
  }
  Submit(form) {
    
    console.log ("form.value", form.value)
     //if (form.valid) {
         let addedData = JSON.stringify(form.value);
         console.log ("addedData", addedData);
        this.http.post(environment.api+"offers", addedData,this.httpOptions).subscribe((res) => {
           this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});  
           this.router.navigate(['/listeOffres']);
         },
           error => {
             this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
           })
       ;
    // }
   }

  

  /* onKeyUpEvent(confirmPass:any){
    console.log(confirmPass.target.value);
    if(confirmPass.target.value!=this.societe.password)
    {this.notSame=true;}
    else
    this.notSame=false;

}*/

/* Data Service*/
/*
save(f:any):Observable<any[]>{
  let body = JSON.parse(JSON.stringify(f.value));
  console.log(body);
  return this.http.post<any>(environment.api+"/users",body, this.httpOptions);
}
*/
}