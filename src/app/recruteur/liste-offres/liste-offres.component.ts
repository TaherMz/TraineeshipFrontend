import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import {DataService} from '../uniteStage/data.service';

@Component({
  selector: 'app-liste-offres',
  templateUrl: './liste-offres.component.html',
  styleUrls: ['./liste-offres.component.css']
})
export class ListeOffresComponent implements OnInit {
  productList= [ {name: 'Article 1', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 2', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 3', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 4', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 5', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 6', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 7', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 8', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 9', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  {name: 'Article 10', price: 8799 , image:"../../assets/img/b.jpg", description : "Descrption de l article ici" , },
  
   ];
 
  dataService: any;
  offers:[ ];

  constructor(/*private dataService: DataService,*/ private http:HttpClient) { }

  ngOnInit(): void {
    /*
    this.dataService.getAllOffers().subscribe(data=>{
      console.log(data['data']);
       for(let i=0;i<data['data'].length;i++)
       {
         if(data['data'][i].role=='E')
         this.offers.push(data['data'][i]);
       }
  
  console.log(this.offers);
     })*/
  }

}
