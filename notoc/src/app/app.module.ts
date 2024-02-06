import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwbComponent } from './awb/awb.component';
import {HttpClientModule} from "@angular/common/http";
import {AwbService} from "./awb/awb.service";

@NgModule({
  declarations: [
    AppComponent,
    AwbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AwbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
