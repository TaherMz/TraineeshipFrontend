import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder, NgForm, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/uniteStage/data.service';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'ng2-file-upload'; 


@Component({  encapsulation: ViewEncapsulation.None,
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css'],  
  providers: [MessageService]

})
export class CreerCompteComponent implements OnInit {
  SERVER_URL = "localhost:3000/uploads";

  public uploader: FileUploader = new FileUploader({
    itemAlias: 'attestationjurdique',
    url:environment.api+"auth/signup",
  });
  uploadForm: FormGroup;  
  uploadedFiles: any []=[] ;
  name?:any="";
  password?:any="";
  email?:any="";
  code?:any="DSI";
  mail:any="";
  mfsc:any="";
  tel:any="";
  pass:any="";
  emplace:any="";
  secteur:any="";
  desc:any="";
  nom:any="";
  stat:any="inactif";
  et:any="Non Affceté";
  tst:any="false";
  enab:any="false";
  numtel?:any="";
  cin?:any="";
  prenom?:any="";
  n1?:any="";
  n2?:any="";
  n3?:any="";
  mfisc?:any="";
  secteuractivite?:any="";
  emplacement?:any="";
  attestationjurdique?:any;
  description?="";
  status?:any="en attente";
  role?:any="E";
  role1?:any="S";
  role2?:any="US";
  enabled?:boolean=false;
  test?:boolean=false;
  selectedHero: any;
  categories: string[] = ['Angular', 'Vue', 'React', 'PHP', 'Laravel'];
  etat:String="Non Affecté";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private formBuilder: FormBuilder,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { 
    this.uploadForm = this.formBuilder.group({
      role:"",
      cin:"",
      code:"",
      status:"en attente",
      enabled:"false",
      etat:"Non Affecté",
      test:"false",
      name:"",
      password:"",
      secteuractivite:"",
      email:"",
      emplacement:"",
      attestationjurdique:[null],
      numtel:"",
      description:"",
      mfisc:"",
    });
  }

  ngOnInit(): void {
    console.log(this.role);
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
    };
  }
  onSelect(hero: any): void {
    this.selectedHero = hero;
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('attestationjurdique').setValue(file);
    }
  }
 
  Submit() {
    console.log(this.uploadForm.get('attestationjurdique').value.name);
    console.log(this.uploadForm.value);
    const formData = new FormData();
    formData.append('role',this.uploadForm.get('role').value);
    formData.append('cin',this.uploadForm.get('cin').value);
    formData.append('code',this.uploadForm.get('code').value);
    formData.append('status',this.uploadForm.get('status').value);

    formData.append('test',this.uploadForm.get('test').value);
     formData.append('name',this.uploadForm.get('name').value);

     formData.append('password',this.uploadForm.get('password').value);
     formData.append('secteuractivite',this.uploadForm.get('secteuractivite').value);
     formData.append('email',this.uploadForm.get('email').value);
     formData.append('emplacement',this.uploadForm.get('emplacement').value);
     formData.append(' attestationjurdique',this.uploadForm.get('attestationjurdique').value);
     formData.append('numtel',this.uploadForm.get('numtel').value);
     formData.append('description',this.uploadForm.get('description').value);
     formData.append('mfisc',this.uploadForm.get('mfisc').value);

     
 
    return this.http.post(environment.api+"auth/signup", formData).subscribe(
      
       (res) => {console.log(res);
        this.router.navigate(['/login']);
        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});},
       (err) => {console.log(err);
        this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
      });
    }

     SubmitForm(f:any){
      let addedData = JSON.stringify(f.value);
      console.log ("addedData", addedData);
 return this.http.post(environment.api+"auth/signup", addedData,this.httpOptions).subscribe((res:any) => {
  this.router.navigate(['/login']);     
       this.messageService.add({severity:'success', summary: ' Message', detail:'success'});
      },
        error => {
          this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
        })
     }
}
