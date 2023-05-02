import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreventivoComponent } from './module/preventivo/preventivo.component';
import { LiberatoriaComponent } from './module/liberatoria/liberatoria.component';
import { ConsegnaComponent } from './module/consegna/consegna.component';

@NgModule({
  declarations: [
    AppComponent,
    PreventivoComponent,
    LiberatoriaComponent,
    ConsegnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
