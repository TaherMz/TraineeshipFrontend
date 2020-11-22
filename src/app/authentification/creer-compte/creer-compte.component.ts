import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username:string; 
  password:string;
  mail:string;
  cin:number;
  name:string;
  prenom:string;
  numtel:number; 
  code:string;
  niveau:number;
  nameE:string;
  mailE:string;
  passwordE:string;
  description:string;
  emplc:string;
  matricule:number;
  secteur:string;
  attest:string;
}
