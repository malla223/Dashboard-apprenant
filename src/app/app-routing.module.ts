import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailApprenantComponent } from './detail-apprenant/detail-apprenant.component';
import { DetailFormateurComponent } from './detail-formateur/detail-formateur.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { InscriFormateurComponent } from './inscri-formateur/inscri-formateur.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PresenceJourComponent } from './presence-jour/presence-jour.component';
import { PresenceMoisComponent } from './presence-mois/presence-mois.component';
import { PresenceSemaineComponent } from './presence-semaine/presence-semaine.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdateApprenantComponent } from './update-apprenant/update-apprenant.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {path:'inscription', component: InscriptionComponent},
  {path:'detailsf/:id_f', component: DetailFormateurComponent},
  {path:'update-format/:id_f', component: UpdateFormateurComponent},
  {path:'details/:id', component: DetailApprenantComponent},
  {path:'insri-forma', component: InscriFormateurComponent},
  {path:'update/:id', component: UpdateApprenantComponent},
  {path:'password', component: EditPasswordComponent},
  {path:'jour', component: PresenceJourComponent},
  {path:'mois', component: PresenceMoisComponent},
  {path:'semaine', component: PresenceSemaineComponent},
  {path:'profil', component: ProfilComponent},
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
