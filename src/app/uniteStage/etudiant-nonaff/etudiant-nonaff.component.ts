import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-etudiant-nonaff',
  templateUrl: './etudiant-nonaff.component.html',
  styleUrls: ['./etudiant-nonaff.component.css']
})
export class EtudiantNonaffComponent implements OnInit {
  etudiants:any[]=[];

  constructor(private dataService: DataService,private http:HttpClient) { }

  ngOnInit() {
   this.dataService.getAllEtudiants().subscribe(data=>{
    console.log(data['data']);
     for(let i=0;i<data['data'].length;i++)
     {
       if(data['data'][i].role=='E' && data['data'][i].etat=="Non Affecté" )
       this.etudiants.push(data['data'][i]);
       console.log(this.etudiants);
     }
console.log(this.etudiants);
   });
   
  }
}
