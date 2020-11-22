import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreerCompteComponent } from './authentification/creer-compte/creer-compte.component';
import { LoginComponent } from './authentification/login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErreurComponent } from './authentification/erreur/erreur.component';
import { NavbarComponent } from './accueil/navbar/navbar.component';
import { FooterComponent } from './accueil/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreerCompteComponent,
    LoginComponent,
    AccueilComponent,
    ErreurComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
