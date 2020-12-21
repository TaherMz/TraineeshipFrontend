import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modifier-offre',
  templateUrl: './modifier-offre.component.html',
  styleUrls: ['./modifier-offre.component.css'],
  providers: [MessageService]

})
export class ModifierOffreComponent implements OnInit {
  email?:any="";
  datedebut?:any;
  datefin?:any;
  tel?:any="";
  profil?:any="";
  nomsociete?:any="";
  categories?:any="";
  mission?:any="";
  status?:any="en attente";
  enabled?:boolean=false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  msgs: Message[] = [];
  offre?:any;
identifiant:any;
  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.offre =this.dataService.user;
    console.log(this.offre);

    this.identifiant= this.activatedRoute.snapshot.params['id'];
    this.http.get(environment.api+"offers" +`/${this.identifiant}`) .subscribe((res)=>{
      this.offre=res['data'];
      console.log(this.offre);
    }) 
 
  }

  Submit(f){
    return  this.http.patch(environment.api+"offers" +`/${this.offre._id}`, f.value).subscribe(
      (Response) => {
            this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];
        console.log(f.value);
        console.log("success");
        this.router.navigate(['/listeOffres']);
      },
        (error) =>{
                this.msgs = [{severity:'error', summary:'Erreur lors de la modification du l offre ', detail:''}];

      console.log("error");
    });
  }


}
