import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css'],  
  providers: [MessageService]

})
export class CreerCompteComponent implements OnInit {
  name?:any="";
  email?:any="";
  code?:any="";
  password?:any="";
  numtel?:any="";
  cin?:any="";
  prenom?:any="";
  niveau?:any="";
  status?:any="en attente";
  role?:any="E";
  enabled?:boolean=false;

  constructor(private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.role);
  }
  Submit(form) {
   console.log ("form.value", form.value)
   // if (form.valid) {
       /* let addedData = JSON.stringify(form.value);
        console.log ("addedData", addedData);
       this.http.post(environment.api+"/auth/signup", addedData).subscribe((res) => {
          this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});  
          this.router.navigate(['/accueil']);
        },
          error => {
            this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
          })
      ;*/
    //}
  }
}
