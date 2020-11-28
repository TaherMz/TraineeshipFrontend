import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-etudiant',
  templateUrl: './profile-etudiant.component.html',
  styleUrls: ['./profile-etudiant.component.css'],
  providers:[MessageService]
})
export class ProfileEtudiantComponent implements OnInit {
  name?:any="";
  email?:any="";
  code?:any="";
  password?:any="";
  numtel?:any="";
  cin?:any="";
  prenom?:any="";
  niveau?:any="";
  mfisc?:any="";
  secteuractivite?:any="";
  emplacement?:any="";
  attestationjuridique?:any="";
  description?="";
  status?:any="en attente";
  role?:any="E";
  role1?:any="S";
  identifiant:any;
  role2?:any="US";
  etudiant?:any;
  enabled?:boolean=false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.dataService.getAllEtudiants().subscribe(data=>{
      for(let i=0;i<data['data'].length;i++)
      {
        if(data['data'][i].id==this.identifiant)
        this.etudiant=data['data'][i];
      }
    });
  }
  Submit(form) {
    
   console.log ("form.value", form.value)
   // if (form.valid) {
        let addedData = JSON.stringify(form.value);
        console.log ("addedData", addedData);
       this.http.post(environment.api+"auth/signup", addedData,this.httpOptions).subscribe((res) => {
          this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});  
          this.router.navigate(['/login']);
        },
          error => {
            this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
          })
      ;
    //}
  }

}
