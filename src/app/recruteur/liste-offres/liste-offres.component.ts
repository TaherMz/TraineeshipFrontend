import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from 'src/app/uniteStage/data.service';


@Component({
  selector: 'app-liste-offres',
  templateUrl: './liste-offres.component.html',
  styleUrls: ['./liste-offres.component.css']
})
export class ListeOffresComponent implements OnInit {
  etudiant:boolean=false;
  test:Observable<any[]>;
  user:any;
orders=[];
selDmn : string='';
prc=0;
 
  offers:any[]=[];

  constructor(private dataService: DataService, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {


      
    this.dataService.getAllOffers().subscribe(data=>{
      console.log(data['data']);
       for(let i=0;i<data['data'].length;i++)
       {
        // if(data['data'][i].status=="actif")
         this.offers.push(data['data'][i]);
       }
  
  console.log(this.offers);
  
     });
     this.user=this.dataService.user;
     console.log(this.user)
     if (this.user.role=='E')
      {this.etudiant=false;}
     
  }
  
  onClick(offer)
  {this.router.navigate(['/postulerInOffre',offer.id]);}

}
