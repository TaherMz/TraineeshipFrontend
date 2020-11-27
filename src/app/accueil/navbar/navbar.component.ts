import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/uniteStage/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  visibleSidebar1;
  uniteStage:boolean=true;
  constructor(private customerService:DataService,private router:Router) { }
verfiprofil(id:any){
  //traja3 profil selon role l user
  this.customerService.getAllEtudiants().subscribe(data=>{
    console.log(data['data']);
    /* for(let i=0;i<data['data'].length;i++)
     {
       if(data['data'][i].role=='US')
       this.router.navigate(['/profilUnite',id]);   
       else
       if(data['data'][i].role=='S')
       this.router.navigate(['/profilSociete',id]);   
       else
       if(data['data'][i].role=='E')
       this.router.navigate(['/profilEtudiant',id]);   
        }*/
   });
}
  ngOnInit(): void {
   //ken l user unite de stage
   this.customerService.getAllEtudiants().subscribe(data=>{
     for(let i=0;i<data['data'].length;i++)
     {
       if(data['data'][i].role=='US')
       this.uniteStage=false;
     }
console.log(this.uniteStage);
   });
  }

}
