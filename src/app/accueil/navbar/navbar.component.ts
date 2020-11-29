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
  user:any;
  uniteStage:boolean=true;
  constructor(private dataService:DataService,private router:Router) { }
verifprofil(){
  if (this.user.role=='US')
  this.router.navigate(['/profilUnite']);  
 else
  if (this.user.role=='E')
  this.router.navigate(['/profilEtudiant']);   
  else
  if (this.user.role=='S')
  this.router.navigate(['/profilSociete']);   
}

  ngOnInit(): void {
    this.user=this.dataService.user;
    console.log(this.user);
    if (this.user.role=='US')
    this.uniteStage=false;
   //ken l user unite de stage
  /* this.dataService.getAllEtudiants().subscribe(data=>{
     for(let i=0;i<data['data'].length;i++)
     {
       if(data['data'][i].role=='US')
      
     }
console.log(this.uniteStage);
   });*/
  }

}
