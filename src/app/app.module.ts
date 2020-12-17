import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreerCompteComponent } from './authentification/creer-compte/creer-compte.component';
import { LoginComponent } from './authentification/login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErreurComponent } from './authentification/erreur/erreur.component';
import { NavbarComponent } from './accueil/navbar/navbar.component';
import { FooterComponent } from './accueil/footer/footer.component';
import { PrimeNGConfig } from 'primeng/api';
import { ListeEtudiantsComponent } from './uniteStage/liste-etudiants/liste-etudiants.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DataService } from './uniteStage/data.service';
import {GlobalHttpInterceptorService} from "./GlobalHttpInterceptorService";
import { TableModule } from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {StepsModule} from 'primeng/steps';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MatIconModule} from '@angular/material/icon';
import {FileUploadModule} from 'primeng/fileupload';
//import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  ReactiveFormsModule } from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostulerOffreComponent } from './recruteur/postuler-offre/postuler-offre.component';
import { VerifListeoffresComponent } from './uniteStage/verif-listeoffres/verif-listeoffres.component';
import { ProfileEtudiantComponent } from './authentification/profil/profile-etudiant/profile-etudiant.component';
import { ProfileSocieteComponent } from './authentification/profil/profile-societe/profile-societe.component';
import { ProfileUnitestageComponent } from './authentification/profil/profile-unitestage/profile-unitestage.component';
import { ModifierOffreComponent } from './recruteur/modifier-offre/modifier-offre.component';
import { PostulerInOffreComponent } from './etudiant/postuler-in-offre/postuler-in-offre.component';
import {SidebarModule} from 'primeng/sidebar';
import { ListeOffresComponent } from './recruteur/liste-offres/liste-offres.component';
import {MatInputModule} from '@angular/material/input';
import { ListeRecruteursComponent } from './uniteStage/liste-recruteurs/liste-recruteurs.component';
import { DatePipe } from '@angular/common';
import { EtudiantNonaffComponent } from './uniteStage/etudiant-nonaff/etudiant-nonaff.component';

@NgModule({
  declarations: [
    AppComponent,ListeEtudiantsComponent,
    CreerCompteComponent,ListeOffresComponent,
    LoginComponent,
    AccueilComponent,
    ErreurComponent,
    NavbarComponent,
    FooterComponent,
    PostulerOffreComponent,
    VerifListeoffresComponent,
    ProfileEtudiantComponent,
    ProfileSocieteComponent,
    ProfileUnitestageComponent,
    ModifierOffreComponent,
    PostulerInOffreComponent,
    ListeRecruteursComponent,
    EtudiantNonaffComponent,
  ],
  exports:[MatFormFieldModule,MatInputModule,],
  imports: [HttpClientModule,FormsModule,StepsModule,ToastModule,InputSwitchModule,
    BrowserModule,BrowserAnimationsModule,RadioButtonModule,MatTabsModule,FontAwesomeModule,
    AppRoutingModule,TableModule,TabMenuModule,MessagesModule,MatFormFieldModule,SidebarModule,
    ConfirmDialogModule,InputTextModule,MultiSelectModule,ReactiveFormsModule,MatInputModule,
    FileUploadModule,
  ],
  providers: [DataService, { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  }],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(private primengConfig: PrimeNGConfig) {}

ngOnInit() {
    this.primengConfig.ripple = true;
} }
