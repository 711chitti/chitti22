import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WheathernavbarComponent } from './wheathernavbar/wheathernavbar.component';
import { CurrentwheatherComponent } from './currentwheather/currentwheather.component';
import { CurrentdayComponent } from './currentday/currentday.component';
import { HomeComponent } from './home/home.component';
import { WheatherService } from './wheather.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    WheathernavbarComponent,
    CurrentwheatherComponent,
    CurrentdayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
      ReactiveFormsModule,
      HttpModule
  ],
  providers: [WheatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
