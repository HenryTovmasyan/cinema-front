import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TheaterSeatsComponent } from './theater-seats/theater-seats.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CinemaService} from './cinema.service';

@NgModule({
  declarations: [
    AppComponent,
    TheaterSeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      CinemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
