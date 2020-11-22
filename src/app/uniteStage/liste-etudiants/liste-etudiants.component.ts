import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit  {

  customers: any[];

  rowGroupMetadata: any;
etudiants:any[];
  constructor(private customerService: DataService) { }

  ngOnInit() {
   
      this.customerService.getCustomersMedium().then(data => {
          this.customers = data;
          console.log(this.customers);
          this.updateRowGroupMetaData();
      });
  }

  onSort() {
      this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.customers) {
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
    }
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
