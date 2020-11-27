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
     }
//this.etudiants=data['data'];
console.log(this.etudiants);
   });
   
      this.dataService.getCustomersSmall().then(data => {
          this.customers = data;
          console.log(this.customers);
         // this.updateRowGroupMetaData();
      });
      
  }
  onChangeStatus(e, etudiant) {
    let object = {
      id: etudiant.id,
      enabled: e ? true : false
  }
  console.log(object);
  /*this.http.patch(environment.api+"/users/", object).subscribe(result => {
   console.log('Le statut a été modifié avec succès');

    etudiant.enabled = !etudiant.enabled;
    if (etudiant.enabled == false)  { etudiant.status = 'inactif'; 
    //this.msgs = [{severity:'info', summary:'Le restaurant n est plus actif', detail:''}];
  }
    else if (etudiant.enabled == true) { etudiant.status = 'actif';
    //this.msgs = [{severity:'info', summary:'Le restaurant est actif', detail:''}];
  }
}, err => {console.log('Erreur');
//this.msgs = [{severity:'error', summary:'Erreur lors de la modification du status', detail:''}];

});*/
  }
  onSort() {
      this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

   /* if (this.customers) {
        for (let i = 0; i < this.customers.length; i++) {
            let rowData = this.customers[i];
            let representativeName = rowData.representative.name;
            
            if (i == 0) {
                this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
            }
            else {
                let previousRowData = this.customers[i - 1];
                let previousRowGroup = previousRowData.representative.name;
                if (representativeName === previousRowGroup)
                    this.rowGroupMetadata[representativeName].size++;
                else
                    this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
            }
        }
    }*/
}
 /* getAllEtud(c:any){
    let e:any[];
    for (let i = 0; i < this.etudiants.length; i++) {
      let rowData = this.etudiants[i];
      let etud = rowData.code;
      if(c.code==etud.code)
      e.push(this.etudiants[i]);
    }
    console.log(e);
    return e;
  }*/
}
