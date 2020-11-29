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
  societe?:any;
  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.societe=this.dataService.user;
    console.log(this.societe);
  }
  Submit(f){
   /* return this.dataService.editProfile(f.value).subscribe(
      (Response) => {
        console.log(f.value);
        console.log("success");
        this.router.navigate(['/accueil']);
      },
        (error) =>{
      console.log("error");
    });*/
  }
    }
