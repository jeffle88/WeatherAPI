import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { VegasComponent } from './vegas/vegas.component';
import { AustinComponent } from './austin/austin.component';
import { NycComponent } from './nyc/nyc.component';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    VegasComponent,
    AustinComponent,
    NycComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
