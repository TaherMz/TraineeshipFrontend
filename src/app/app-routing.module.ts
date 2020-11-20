import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreerCompteComponent } from './authentification/creer-compte/creer-compte.component';
import { ErreurComponent } from './authentification/erreur/erreur.component';
import { LoginComponent } from './authentification/login/login.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'login', component:LoginComponent},
  {path:'signUp', component:CreerCompteComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'**',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
