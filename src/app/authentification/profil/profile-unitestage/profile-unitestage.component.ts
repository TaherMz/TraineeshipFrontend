import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.unite=this.dataService.user;
    console.log(this.unite);
  }


}
