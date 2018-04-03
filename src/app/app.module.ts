import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';

//routes
import { AppRoutingModule  } from './app-routing.module';
import { FirmOverviewComponent } from './firm-overview/firm-overview.component';



@NgModule({
  declarations: [
    AppComponent,
    FirmOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
