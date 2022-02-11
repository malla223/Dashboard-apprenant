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
import { DetailApprenantComponent } from './detail-apprenant/detail-apprenant.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { DetailFormateurComponent } from './detail-formateur/detail-formateur.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './filter.pipe';

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
    InscriFormateurComponent,
    DetailApprenantComponent,
    UpdateFormateurComponent,
    DetailFormateurComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
