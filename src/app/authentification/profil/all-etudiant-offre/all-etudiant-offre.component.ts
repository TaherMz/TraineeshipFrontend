import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';
declare var require: any
const FileSaver = require('file-saver');

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
  pdfSource:object; //./assets/test.pdf
etud: any;
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
         if(data['data'][i].role=="E")
         this.userset.push(data['data'][i]);
         console.log(this.userset);
       }
  console.log(this.userset);
     });




    
    this.dataService.getAllEtudiants().subscribe(data=>{
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
 
   onChangeStatus(e, etudiant) {
   /*   console.log(etudiant);
      etudiant.enabled = !etudiant.enabled;
      if (etudiant.enabled == false)  { etudiant.etat = 'Non Affecté'; etudiant.enabled=false; }
      else if (etudiant.enabled == true) { etudiant.etat= 'Affecté';etudiant.enabled=true;}
     this.http.patch(environment.api+"PostInOffer" +`/${etudiant._id}`, etudiant).subscribe(data=>{
    console.log("success"+etudiant.enabled);    
      }, 
        (error) =>{
      console.log("error");
    });*/
    }

    s(){
      console.log(this.etudiants[2].cv);
     this.http.get( "localhost:3000"+`/${this.etudiants[2].cv}`).subscribe(data=>{
      console.log(data);    
        }, 
          (error) =>{
        console.log("error");
      });
    }

     onChangeetat(e, etudiant) {
      console.log(etudiant);
      
    for(let i=0;i<this.userset.length;i++)
      { if(etudiant.email==this.userset[i].email)
       {
      this.userid=this.userset[i]._id;
      this.etud=this.userset[i];
      break;
       }}
       this.etud.test = !this.etud.test;
      if (this.etud.test == false)  { this.etud.etat = 'Non Affecté'}
      else if (this.etud.test == true) { this.etud.etat= 'Affecté'}
       console.log(this.etud);
       console.log(this.userid);
     this.http.patch(environment.api+"users" +`/${this.userid}`, this.etud).subscribe(data=>{
    console.log("success "+etudiant.enabled);    
    console.log(etudiant.email); 
    console.log(this.userid); 
      }, 
        (error) =>{
      console.log("error");
    });
    etudiant.enabled = !etudiant.enabled;
    if (etudiant.enabled == false)  { etudiant.etat = 'Non Affecté'}
    else if (etudiant.enabled == true) { etudiant.etat= 'Affecté'}
    console.log(etudiant);
    this.http.patch(environment.api+"PostInOffer" +`/${etudiant._id}`, etudiant).subscribe(data=>{
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
    downloadPdf(pdfUrl: string, pdfName: string ) {
      //const pdfUrl = './assets/sample.pdf';
      //const pdfName = 'your_pdf_file';
      FileSaver.saveAs(pdfUrl, pdfName);
    }
    openDoc(pdfUrl: string, startPage: number ) {
    //+ '#page=' + startPage
      window.open("localhost:3000"+`/${pdfUrl}` , '_blank', '', true);
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
