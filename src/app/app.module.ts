import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RingsComponent } from './rings/rings.component';
import { EarRingComponent } from './ear-ring/ear-ring.component';
import { BracletComponent } from './braclet/braclet.component';
import { HaarComponent } from './haar/haar.component';
import { ExtrasComponent } from './extras/extras.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RingsComponent,
    EarRingComponent,
    BracletComponent,
    HaarComponent,
    ExtrasComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule, 
    MatIconModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
