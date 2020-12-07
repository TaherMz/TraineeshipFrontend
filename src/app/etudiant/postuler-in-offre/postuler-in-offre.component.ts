import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api/';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/uniteStage/data.service';


@Component({
  selector: 'app-postuler-in-offre',
  templateUrl: './postuler-in-offre.component.html',
  styleUrls: ['./postuler-in-offre.component.css'],
  providers: [MessageService]
})
export class PostulerInOffreComponent implements OnInit {
  identifiant:any;
  etudiant?:any;
  
  telephone?:any="";
  specialite?:any="";
  motiv?:any="";
  n1?:any="1";
  n2?:any="2";
  n3?:any="3"; 
  cv?:any=""; 
  enabled?:boolean=false;

  uploadedFiles: any[] = [];
  offre:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })}

  constructor(private activatedRoute:ActivatedRoute,private messageService: MessageService, private http:HttpClient, private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
    this.etudiant=this.dataService.user;
    console.log(this.etudiant);
    //this.offre = this.dataService.offres.mission;
    this.identifiant= this.activatedRoute.snapshot.params['id'];
    this.http.get(environment.api+"offers" +`/${this.identifiant}`) .subscribe((res)=>{
      this.offre=res['data'];
      //this.offre.status="actif";
      console.log(this.offre);
    }) 

  }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
Submit(form) {
    
  console.log ("form.value", form.value)
  // if (form.valid) {
       let addedData = JSON.stringify(form.value);
       console.log ("addedData", addedData);
      this.http.post(environment.api+"PostInOffer", addedData,this.httpOptions).subscribe((res) => {
         this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});  
         this.router.navigate(['/listeOffres']);
       },
         error => {
           this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
         })
     ;
   //}
 }



}
