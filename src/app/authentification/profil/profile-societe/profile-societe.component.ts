import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';

@Component({
  selector: 'app-profile-societe',
  templateUrl: './profile-societe.component.html',
  styleUrls: ['./profile-societe.component.css'],
  providers:[MessageService]

})
export class ProfileSocieteComponent implements OnInit {
  identifiant:any;
  etudiant?:any;
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

}
