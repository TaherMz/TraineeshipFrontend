import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-recruteurs',
  templateUrl: './liste-recruteurs.component.html',
  styleUrls: ['./liste-recruteurs.component.css']
})
export class ListeRecruteursComponent implements OnInit {
  rowGroupMetadata: any;
recruteurs:any[]=[];
rec:any;
  constructor(private dataService: DataService,private http:HttpClient) { }

  ngOnInit() {
    this.rec=this.dataService.user;

   this.dataService.getAllEtudiants().subscribe(data=>{
    console.log(data['data']);
     for(let i=0;i<data['data'].length;i++)
     {
       if(data['data'][i].role=='S')
       this.recruteurs.push(data['data'][i]);
       console.log(this.recruteurs);
     }
console.log(this.recruteurs);
   });
   
  }
  onChangeStatus(e, recruteur) {
    console.log(recruteur);
    recruteur.enabled = !recruteur.enabled;
    if (recruteur.enabled == false)  { recruteur.status = 'inactif'; recruteur.enabled=false; }
    else if (recruteur.enabled == true) { recruteur.status = 'actif';recruteur.enabled=true;}
   this.http.patch(environment.api+"users" +`/${recruteur._id}`, recruteur).subscribe(data=>{
  console.log("success"+recruteur.enabled);    
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
