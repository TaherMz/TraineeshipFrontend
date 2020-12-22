import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-etudiant-offre',
  templateUrl: './all-etudiant-offre.component.html',
  styleUrls: ['./all-etudiant-offre.component.css'],
  providers:[MessageService]
})
export class AllEtudiantOffreComponent implements OnInit {
  etudiants:any[]=[];
  societe?:any;
  offers:any[]=[];
  identifiant:any;

  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }
  ngOnInit(): void {

    this.identifiant= this.activatedRoute.snapshot.params['id'];
    this.societe=this.dataService.user;
    console.log(this.societe);


    this.dataService.getMyOffer().subscribe(data=>{
      console.log(data['data']);
       for(let i=0;i<data['data'].length;i++)
       {
         if(data['data'][i].status=="actif")
         this.offers.push(data['data'][i]);
       }
  console.log(this.offers);
  
     });




    
    this.dataService.getAllEtudiant().subscribe(data=>{
      console.log(data['data']);
       for(let i=0;i<data['data'].length;i++)
       {
         if(data['data'][i].id_offer==this.identifiant)
         this.etudiants.push(data['data'][i]);
         console.log(this.etudiants);
       }
  console.log(this.etudiants);
     }); 
 
   
    
  }
 
     onChangeetat(e, etudiant) {
      console.log(etudiant);
      etudiant.enabled = !etudiant.enabled;
      if (etudiant.enabled == false)  { etudiant.etat = 'Non Affecté'}
      else if (etudiant.enabled == true) { etudiant.etat= 'Affecté'}
     this.http.patch(environment.api+"PostInOffer" +`/${etudiant._id}`, etudiant).subscribe(data=>{
    console.log("success"+etudiant.enabled);    
      }, 
        (error) =>{
      console.log("error");
    });
    }

    notify(etudiant){
      let msg="Cher etudiant on a l honneur de vous informer qu on vous a accepté dans notre societe "+this.societe.name;
      let object={"to":etudiant.email,"sub":"Acceptation dans Le Stage","text":msg};
      return this.http.post(environment.api+"users", object).subscribe((res:any) => {
        console.log("success");
        this.messageService.add({severity:'success', summary: 'Succes', detail:'Notfication Envoyé'});  
  
       },
         error => {
          console.log("error");
      })
    } 
}
