import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]

})
export class LoginComponent implements OnInit {
  email?:any="";
  password?:any="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  Submit(form) {
    
    console.log ("form.value", form.value)
    // if (form.valid) {
         let addedData = JSON.stringify(form.value);
         console.log ("addedData", addedData);
        this.http.post(environment.api+"auth/login", addedData,this.httpOptions).subscribe((res) => {
           this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});  
           this.router.navigate(['/accueil']);
         },
           error => {
             this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
           })
       ;
     //}
   }
}
