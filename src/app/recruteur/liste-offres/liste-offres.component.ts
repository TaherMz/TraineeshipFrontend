import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/uniteStage/data.service';


@Component({
  selector: 'app-liste-offres',
  templateUrl: './liste-offres.component.html',
  styleUrls: ['./liste-offres.component.css']
})
export class ListeOffresComponent implements OnInit {
  productList= [ 
   ];
 
  offers:any[]=[];

  constructor(private dataService: DataService, private http:HttpClient) { }

  ngOnInit(): void {
    this.dataService.getAllOffers().subscribe(data=>{
      console.log(data['data']);
       for(let i=0;i<data['data'].length;i++)
       {
        // if(data['data'][i].status=="actif")
         this.offers.push(data['data'][i]);
       }
  
  console.log(this.offers);
  
     })
  }

}
