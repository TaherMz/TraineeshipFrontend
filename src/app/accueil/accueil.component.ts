import { Component, Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; 
import { DataService } from '../uniteStage/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
unite:boolean=true;
user:any;
societe:boolean=true;

  constructor(private dataService:DataService,private router:Router) { }

  items: MenuItem[];
    ngOnInit() {
      this.user=this.dataService.user;
      console.log(this.user);
      if (this.user.role=='US')
      {this.unite=false;}

      if (this.user.role=='S')
      {this.societe=false;}
      
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
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
