import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeCardComponent,
    PokeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
