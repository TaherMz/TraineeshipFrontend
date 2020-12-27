import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-verif-listeoffres',
  templateUrl: './verif-listeoffres.component.html',
  styleUrls: ['./verif-listeoffres.component.css']
})
export class VerifListeoffresComponent implements OnInit {
cars:any[]=[];
ut:any;
  constructor(private dataService:DataService,private http:HttpClient) { }

  ngOnInit() {
    this.ut=this.dataService.user;

    this.dataService.getRest().subscribe (cars=>{
      console.log(cars);
      this.cars=cars['data'] }
      )
    } 

    onChangeStatus(e, offre) {
      console.log(offre);
      offre.enabled = !offre.enabled;
      if (offre.enabled == false)  { offre.status = 'inactif'; offre.enabled=false; }
      else if (offre.enabled == true) { offre.status = 'actif';offre.enabled=true;}
     this.http.patch(environment.api+"offers" +`/${offre._id}`, offre).subscribe(data=>{
    console.log("success"+offre.enabled);    
      },
        (error) =>{
      console.log("error");
    });
    }
}
