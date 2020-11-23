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
import { ListeOffresComponent } from './uniteStage/liste-offres/liste-offres.component';
import { HttpClientModule } from "@angular/common/http";
import { DataService } from './uniteStage/data.service';
import { TableModule } from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {StepsModule} from 'primeng/steps';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
//import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  ReactiveFormsModule } from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,ListeEtudiantsComponent,
    CreerCompteComponent,ListeOffresComponent,
    LoginComponent,
    AccueilComponent,
    ErreurComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports:[MatFormFieldModule],
  imports: [HttpClientModule,FormsModule,StepsModule,ToastModule,InputSwitchModule,
    BrowserModule,BrowserAnimationsModule,RadioButtonModule,MatTabsModule,
    AppRoutingModule,TableModule,TabMenuModule,MessagesModule,MatFormFieldModule,
    ConfirmDialogModule,InputTextModule,MultiSelectModule,ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(private primengConfig: PrimeNGConfig) {}

ngOnInit() {
    this.primengConfig.ripple = true;
} }
