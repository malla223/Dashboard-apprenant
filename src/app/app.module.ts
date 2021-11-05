import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { PresenceJourComponent } from './presence-jour/presence-jour.component';
import { PresenceMoisComponent } from './presence-mois/presence-mois.component';
import { PresenceSemaineComponent } from './presence-semaine/presence-semaine.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdateApprenantComponent } from './update-apprenant/update-apprenant.component';
import { InscriFormateurComponent } from './inscri-formateur/inscri-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    
    DashboardComponent,
    EditPasswordComponent,
    PresenceJourComponent,
    PresenceMoisComponent,
    PresenceSemaineComponent,
    
    ProfilComponent,
         UpdateApprenantComponent,
         InscriFormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
