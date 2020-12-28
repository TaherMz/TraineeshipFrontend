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


  constructor(private dataService:DataService,private router:Router) { }
user:any;
  items: MenuItem[];
    ngOnInit() {
      this.user=this.dataService.user;
      console.log(this.user);
     
      
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
    }
   
}
