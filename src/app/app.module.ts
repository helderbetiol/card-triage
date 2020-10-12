import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardListingComponent } from './card-listing/card-listing.component';
import { PatientCardComponent } from './patient-card/patient-card.component';
import {PatientStatusDonePipe, PatientStatusNotDonePipe} from './patient-status.pipe';
import { FiltersPipe } from './filters.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CardListingComponent,
    PatientCardComponent,
    PatientStatusNotDonePipe,
    PatientStatusNotDonePipe,
    PatientStatusDonePipe,
    FiltersPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    RouterModule.forRoot([
      {path: '', component: CardListingComponent},
    ]),
    BrowserAnimationsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
