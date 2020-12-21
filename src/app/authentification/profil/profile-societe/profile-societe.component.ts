import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';

@Component({
  selector: 'app-profile-societe',
  templateUrl: './profile-societe.component.html',
  styleUrls: ['./profile-societe.component.css'],
  providers: [ConfirmationService,MessageService]

})
export class ProfileSocieteComponent implements OnInit {
  identifiant:any;
  societe?:any;
  notSame:boolean=false;
  msgs: Message[] = []; 
  offers:any[]=[];
  nomsociete:any;
  constructor(private confirmationService:ConfirmationService,private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

sendOffer(offer){
  this.router.navigate(['all-etudiant-offre',offer._id]);
}

  ngOnInit(): void { 
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

   /* this.dataService.getMyOffers().subscribe(data=>{
      console.log(data['data']);
       for(let i=0;i<data['data'].length;i++)
       {
         if(data['data'][i].status=="actif")
         this.offers=data['data'][i];
       }
     
  console.log(this.offers);
  
     });   */
    }


  Submit(f){
    return this.dataService.editProfile(f.value,this.societe.id).subscribe(
      (Response) => {
            this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];
        console.log("success");
        this.router.navigate(['/accueil']);
      },
        (error) =>{
                this.msgs = [{severity:'error', summary:'Erreur lors de la modification du restaurant', detail:''}];

      console.log("error");
    });
  }

  onKeyUpEvent(confirmPass:any){
    console.log(confirmPass.target.value);
    if(confirmPass.target.value!=this.societe.password)
    {this.notSame=true;}
    else
    this.notSame=false;
    //return this.societe.password === confirmPass.target.value ? null : { notSame: true }  
  }

  onEdit(offer)
  {
    console.log(offer)
    this.router.navigate(['modifierOffre',offer._id]);
  }

  confirm2(offre) {
    this.confirmationService.confirm({
        message: 'Voulez vous la supprimer?',
        header: 'Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.msgs = [{severity:'info', summary:'confirmé', detail:'Offre supprimé'}];
          this.dataService.deleteOffer(offre._id).subscribe(
            (Response) => {
              console.log("success");
            },
            (error) => {
              console.log("error");
           })
            this.msgs = [{severity:'info', summary:'confirmé', detail:'Offre supprimé'}];
            this.router.navigate(['profilSociete']);
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Annulation', detail:''}];
        }
    });
}
    }
