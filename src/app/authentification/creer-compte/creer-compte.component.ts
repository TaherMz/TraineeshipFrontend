import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit {
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
  selectedValue: string = 'val1';

  constructor() { }

  ngOnInit(): void {
  }

}
