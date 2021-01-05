import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()user:any;
  
test:boolean=true;
deco:boolean=false;
decon:boolean=false;
unite:boolean=true;
societe:boolean=true;
  msg:String="";
  constructor(private http:HttpClient,private dataService:DataService,private router:Router) {
  
   }

logout(){
   this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
   this.router.navigate(['/login']);

}

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
   
   if(this.user!=null)
   {
this.msg=this.user.name;
     console.log(this.user);
     this.test=false;
     this.deco=true;
     if (this.user.role=='US')
   {this.unite=false;}

   if (this.user.role=='S')
   {this.societe=false;}
   }
  
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
