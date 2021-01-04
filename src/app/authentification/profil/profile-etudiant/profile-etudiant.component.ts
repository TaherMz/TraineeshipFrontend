import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-profile-etudiant',
  templateUrl: './profile-etudiant.component.html',
  styleUrls: ['./profile-etudiant.component.css'],
  providers:[ConfirmationService,MessageService]
})
export class ProfileEtudiantComponent implements OnInit {
  msgs: Message[] = [];
  societe?:any;
  etudiant?:any;
  name?:any;
  idoffer?:any;
  offers:any[]=[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  notSame: boolean= false;
  etud: any;
  constructor(private confirmationService:ConfirmationService,private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
   this.etudiant =this.dataService.user;
   console.log(this.etudiant);
   this.societe=this.dataService.user; 
   console.log(this.societe);




   this.dataService.getAllmyoffers(this.etudiant.email).subscribe(data=>{
    console.log(data['data']);
     for(let i=0;i<data['data'].length;i++)
     {
      
       this.offers.push(data['data'][i]);
     }
console.log(this.offers);

   });
  }




  
  Submit(f){
    return  this.http.patch(environment.api+"users" +`/${this.etudiant._id}`, f.value).subscribe(
      (Response) => {
            this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];
        console.log(f.value);
        console.log("success");
        this.router.navigate(['/accueil']);
      },
        (error) =>{
                this.msgs = [{severity:'error', summary:'Erreur lors de la modification', detail:''}];

      console.log("error");
    });
  }

 

  /*confirm(offer) {
    this.confirmationService.confirm({
        message: 'Voulez vous Accepter cette offre? Si vous accepter les autres offres seront supprimé automatiquement',
        header: 'Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.dataService
          this.msgs = [{severity:'info', summary:'confirmé', detail:'Offre Accepté'}];
          this.dataService.deleteMyOffer(offer._id).subscribe(
            (Response) => {
              console.log("success");
            },
            (error) => {
              console.log("error");
           })
            this.msgs = [{severity:'info', summary:'confirmé', detail:'Offre Accepté avec succées'}];
            this.router.navigate(['profilEtudiant']);
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Annulation', detail:''}];
        }
    });
}*/

deleteOffres() {

  for(let i=0;i<this.offers.length;i++)
  { if(this.idoffer!=this.offers[i]._id) {
   this.dataService.deleteMyOffer(this.offers[i]._id).subscribe(
    (Response) => {
      console.log("success");
    },
    (error) => {
      console.log("error");
   });
  }
}
}
  


confirm(offer) {
  this.confirmationService.confirm({
      message: 'Voulez vous Accepter cette offre? Si vous l accepter, les autres offres seront supprimées automatiquement',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.idoffer=offer._id;
       this.deleteOffres();
         this.etudiant.test = !this.etudiant.test;
      if (this.etudiant.test == false)  { this.etudiant.etat = 'Non Affecté'}
      else if (this.etudiant.test == true) { this.etudiant.etat= 'Affecté'}
       console.log(this.etudiant);
     this.http.patch(environment.api+"users" +`/${this.etudiant._id}`, this.etudiant).subscribe(data=>{
    console.log("success "+this.etudiant.test);    
      }, 
        (error) =>{
      console.log("error");
    });
    this.router.navigate(['/accueil']);
    this.messageService.add({severity:'info', summary:'Confirmé', detail:'Vous avez Accepter cette offre'});

      },
      reject: () => {
          this.messageService.add({severity:'info', summary:'Annulé', detail:'Annulation'});
      }
  });
} 

}
