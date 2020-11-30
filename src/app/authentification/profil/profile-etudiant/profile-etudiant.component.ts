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
 
  etudiant?:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
   this.etudiant =this.dataService.user;
  }
  Submit(form) {
    
   console.log ("form.value", form.value)
   // if (form.valid) {
        
    //}
  }

}
