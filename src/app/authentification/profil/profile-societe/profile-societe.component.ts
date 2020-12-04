import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
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
  notSame:boolean=false;
  msgs: Message[] = [];

  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.societe=this.dataService.user;
    console.log(this.societe);
  }
  Submit(f){
    return this.dataService.editProfile(f.value,this.societe.id).subscribe(
      (Response) => {
            this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];
        console.log(f.value);
        console.log("success");
        this.router.navigate(['/accueil']);
      },
        (error) =>{
                this.msgs = [{severity:'error', summary:'Erreur lors de la modification du restaurant', detail:''}];

      console.log("error");
    });
  }

  onKeyUpEvent(confirmPass:any){
    console.log(confirmPass.target.value);
    if(confirmPass.target.value!=this.societe.password)
    {this.notSame=true;}
    else
    this.notSame=false;
    //return this.societe.password === confirmPass.target.value ? null : { notSame: true }  
  }
    }
