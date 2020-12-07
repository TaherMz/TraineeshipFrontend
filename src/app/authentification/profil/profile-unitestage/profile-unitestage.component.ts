import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';

@Component({
  selector: 'app-profile-unitestage',
  templateUrl: './profile-unitestage.component.html',
  styleUrls: ['./profile-unitestage.component.css'],
  providers:[MessageService]

})
export class ProfileUnitestageComponent implements OnInit {
  identifiant:any;
  unite?:any;
  msgs: Message[] = [];
  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.unite=this.dataService.user;
    console.log(this.unite);
  }
  Submit(f){
    return this.dataService.editProfile(f.value,this.unite.id).subscribe(
      (Response) => {
            this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];
        console.log(f.value);
        console.log("success");
        this.router.navigate(['/accueil']);
      },
        (error) =>{
                this.msgs = [{severity:'error', summary:'Erreur lors de la modification du restaurant', detail:''}];

      console.log("error");
    });
  }

}
