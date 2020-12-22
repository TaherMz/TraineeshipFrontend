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
  userset:any[]=[];
  societe?:any;
  offers:any[]=[];
  identifiant:any;
  user:any;
  userid:any;

  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }
  ngOnInit(): void {
    this.user=this.dataService.user;
      console.log(this.user);
      

    

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



     this.dataService.getAllEtudiants().subscribe(data=>{
      console.log(data['data']);
       for(let i=0;i<data['data'].length;i++)
       {
         if(data['data'][i].id_offer==this.identifiant)
         this.userset.push(data['data'][i]);
         console.log(this.userset);
       }
  console.log(this.userset);
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
      else if (etudiant.enabled == true) { etudiant.etat= 'Affecté'
    for(let i=0;i<this.userset.length;i++)
      { if(etudiant.email==this.userset[i].email)
       {
      this.userid=this.userset[i]._id;
       }}}
     this.http.patch(environment.api+"users" +`/${this.userid}`, etudiant).subscribe(data=>{
    console.log("success "+etudiant.enabled);    
    console.log(etudiant.email); 
    console.log(this.userid); 
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
    
    verifprofil(){
      if (this.user.role=='US')
     {this.router.navigate(['/profilUnite']);  }
     else
      if (this.user.role=='E')
      {this.router.navigate(['/profilEtudiant']); }  
      else
      if (this.user.role=='S')
      {this.router.navigate(['/profilSociete']);  } 
    }
}
