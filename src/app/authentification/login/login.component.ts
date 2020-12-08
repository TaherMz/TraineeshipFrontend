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
  id:any;
  user:any;
  constructor(private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  Submit(form) {
   /* let addedData = JSON.stringify(form.value);
         console.log ("addedData", addedData);
    return this.http.post(environment.api+"auth/login", addedData,this.httpOptions).subscribe((res:any) => {
          localStorage.setItem("token",res.token)
          this.id=res.user;
          console.log(this.id);
          this.verify(this.id);
          this.router.navigate(['/listeOffres']);
         // this.messageService.add({severity:'success', summary: ' Message', detail:'bienvenue'});
         },
           error => {
            this.messageService.add({severity:'error', summary: ' Message', detail:'ce user nexiste pas'});
             //this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
           })
       ;}

       verify(id){
        this.http.get(environment.api+"users" +`/${id}`) .subscribe((res)=>{
          this.user=res['data'];
          console.log(this.user);
        }) */
        this.dataService.getCurrentUser(form);
       this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});  
      }
        // if (form.valid) {
      
       
     //}
   }

