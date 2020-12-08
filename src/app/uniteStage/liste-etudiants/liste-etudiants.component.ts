import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit  {

  customers: any[];
unite:any[]=["DSI","RSI","SEM"];
  rowGroupMetadata: any;
etudiants:any[]=[];

  constructor(private dataService: DataService,private http:HttpClient) { }

  ngOnInit() {
   this.dataService.getAllEtudiants().subscribe(data=>{
    console.log(data['data']);
     for(let i=0;i<data['data'].length;i++)
     {
       if(data['data'][i].role=='E')
       this.etudiants.push(data['data'][i]);
       console.log(this.etudiants);
     }
console.log(this.etudiants);
   });
   
  }
  onChangeStatus(e, etudiant) {
    console.log(etudiant);
    etudiant.enabled = !etudiant.enabled;
    if (etudiant.enabled == false)  { etudiant.status = 'inactif'; etudiant.enabled=false; }
    else if (etudiant.enabled == true) { etudiant.status = 'actif';etudiant.enabled=true;}
   this.http.patch(environment.api+"users" +`/${etudiant._id}`, etudiant).subscribe(data=>{
  console.log("success"+etudiant.enabled);    
    },
      (error) =>{
    console.log("error");
  });
  }

  onSort() {
      this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
}
 
}
