import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api/';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/uniteStage/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-postuler-in-offre',
  templateUrl: './postuler-in-offre.component.html',
  styleUrls: ['./postuler-in-offre.component.css'],
  providers: [MessageService]
})
export class PostulerInOffreComponent implements OnInit {
  SERVER_URL = "localhost:3000/uploads";

  public uploader: FileUploader = new FileUploader({
    itemAlias: 'cv',
    url:environment.api+"PostInOffer",
  });
  identifiant:any;
  etudiant?:any;
  uploadForm: FormGroup;  
  
  tel?:any="";
  et?:any="Non Affecté"; 
  spec?:any="";
  motiv?:any="";
  n1?:any="1";
  n2?:any="2";
  n3?:any="3"; 
  cv?:any=""; 
  enab?:boolean=false;

  uploadedFiles: any []=[] ;
  offre:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    })}

  constructor(private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute,private messageService: MessageService, private http:HttpClient, private router:Router, private dataService:DataService) {
    this.uploadForm = this.formBuilder.group({
      nomsociete:"",
      id_offer:"",
      etat:"Non Affecté",
      enabled:"false",
      mission:"",
      nom:"",
      prenom:"",
      email:"",  
      telephone:"",
      specialite:"",
      cv: [null],
      lettre_motivation:"",
    });
   }

  ngOnInit(): void {
    this.etudiant=this.dataService.user;
    console.log(this.etudiant);
    this.identifiant= this.activatedRoute.snapshot.params['id'];
    this.http.get(environment.api+"offers" +`/${this.identifiant}`) .subscribe((res)=>{
      this.offre=res['data'];
      console.log(this.offre);
    }) 
    

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
    };
  }

    onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('cv').setValue(file);
    }
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      cv: file
    });
    this.uploadForm.get('cv').updateValueAndValidity()
  }


Submit() {
     const formData = new FormData();
     formData.append('nomsociete',this.uploadForm.get('nomsociete').value);
     formData.append('mission',this.uploadForm.get('mission').value);
     formData.append('id_offer',this.uploadForm.get('id_offer').value);
     formData.append('etat',this.uploadForm.get('etat').value);
     formData.append('enabled',this.uploadForm.get('enabled').value);
     formData.append('nom',this.uploadForm.get('nom').value);
     formData.append('prenom',this.uploadForm.get('prenom').value);
     formData.append('email',this.uploadForm.get('email').value);
     formData.append('telephone',this.uploadForm.get('telephone').value);
     formData.append('specialite',this.uploadForm.get('specialite').value);
     formData.append('lettre_motivation',this.uploadForm.get('lettre_motivation').value);
     formData.append('cv',this.uploadForm.get('cv').value);
 console.log(this.uploadForm.value);
    return this.http.post(environment.api+"PostInOffer", formData).subscribe(
       (res) => console.log(res),
       (err) => console.log(err)
     );
   //}
 }



}
