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
  imports: [HttpClientModule,
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,TableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(private primengConfig: PrimeNGConfig) {}

ngOnInit() {
    this.primengConfig.ripple = true;
} }
