import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreerCompteComponent } from './authentification/creer-compte/creer-compte.component';
import { ErreurComponent } from './authentification/erreur/erreur.component';
import { LoginComponent } from './authentification/login/login.component';
import { ProfileEtudiantComponent } from './authentification/profil/profile-etudiant/profile-etudiant.component';
import { ProfileSocieteComponent } from './authentification/profil/profile-societe/profile-societe.component';
import { ProfileUnitestageComponent } from './authentification/profil/profile-unitestage/profile-unitestage.component';
import { ListeOffresComponent } from './recruteur/liste-offres/liste-offres.component';
import { ListeEtudiantsComponent } from './uniteStage/liste-etudiants/liste-etudiants.component';
import {PostulerInOffreComponent} from './etudiant/postuler-in-offre/postuler-in-offre.component';


const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'login', component:LoginComponent},
  {path:'signUp', component:CreerCompteComponent},
  {path:'listeEtudiants',component:ListeEtudiantsComponent},
  {path:'listeOffres',component:ListeOffresComponent},
  {path:'profilEtudiant',component:ProfileEtudiantComponent},
  {path:'postulerInOffre', component:PostulerInOffreComponent},
  {path:'profilSociete',component:ProfileSocieteComponent},
  {path:'profilUnite',component:ProfileUnitestageComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'**',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
