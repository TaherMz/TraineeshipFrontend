import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';

@Component({  encapsulation: ViewEncapsulation.None,
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css'],  
  providers: [MessageService]

})
export class CreerCompteComponent implements OnInit {
  name?:any="";
  email?:any="";
  code?:any="DSI";
  password?:any="";
  numtel?:any="";
  cin?:any="";
  prenom?:any="";
  n1?:any="";
  n2?:any="";
  n3?:any="";
  mfisc?:any="";
  secteuractivite?:any="";
  emplacement?:any="";
  attestationjuridique?:any="";
  description?="";
  status?:any="en attente";
  role?:any="E";
  role1?:any="S";
  role2?:any="US";
  enabled?:boolean=false;
  test?:boolean=false;
  selectedHero: any;
  categories: string[] = ['Angular', 'Vue', 'React', 'PHP', 'Laravel'];
   object: any[] = [
    { name: 'Dr Nice' },
    {  name: 'Narco' }];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.role);
  }
  onSelect(hero: any): void {
    this.selectedHero = hero;
  }
  Submit(form) {
    
   console.log ("form.value", form.value)
        let addedData = JSON.stringify(form.value);
        console.log ("addedData", addedData);
      this.http.post(environment.api+"auth/signup", addedData,this.httpOptions).subscribe((res) => {
        this.router.navigate(['/login']);
          this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});  
         
        },
          error => {
            this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
          })
      ;
  }
}
