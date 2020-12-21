import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-liste-offres',
  templateUrl: './liste-offres.component.html',
  styleUrls: ['./liste-offres.component.css'],
  providers: [ConfirmationService,MessageService]

})
export class ListeOffresComponent implements OnInit {
  etudiant:boolean=true;
  recruteur:boolean=true;
  test:Observable<any[]>;
  user:any;
orders=[];
selDmn:string="";
prc:String="";
date3:Date;
  offers:any[]=[];
  msgs: Message[] = [];

  constructor(private messageService: MessageService,private confirmationService: ConfirmationService,private dataService: DataService, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.user=this.dataService.user;
    console.log(this.user);
    this.dataService.getAllOffers().subscribe(data=>{
      console.log(data['data']);
       for(let i=0;i<data['data'].length;i++)
       {
         if(data['data'][i].status=="actif")
         this.offers.push(data['data'][i]);
       }
  console.log(this.offers);
  
     });

     

     
    
     if (this.user.role=='E')
      {
        this.etudiant=false;
      }

      if (this.user.role=='S')
      {this.recruteur=false;}
     
  }
  
  onClick(offer)
  {
    console.log(offer)
    this.router.navigate(['postulerInOffre',offer._id]);
  }
 

}
