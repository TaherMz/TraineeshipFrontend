import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-etudiant-nonaff',
  templateUrl: './etudiant-nonaff.component.html',
  styleUrls: ['./etudiant-nonaff.component.css']
})
export class EtudiantNonaffComponent implements OnInit {
  etudiants:any[]=[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private dataService: DataService,private http:HttpClient) { }

  ngOnInit() {
   this.dataService.getAllEtudiant().subscribe(data=>{
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

  notify(){
    let str="";
    let ch="";
    for(let i=0;i<this.etudiants.length;i++)
    {
      str+=this.etudiants[i].email+',';
    }
    for(let i=0;i<str.length-1;i++)
    {
      ch+=str[i];
    }
   console.log(ch);
    let addedData = JSON.stringify(str);
    let object=JSON.stringify({"to":ch,"sub":"Avertissement","text":"Cher etudiant chouf stage nikomk"});
    console.log(object);
    return this.http.post(environment.api+"users", object).subscribe((res:any) => {
      console.log("success");
      
     },
       error => {
        console.log("error");

    })
  } 
}
