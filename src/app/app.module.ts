import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './views/poke-list/poke-list.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeDetailsComponent } from './views/poke-details/poke-details.component';
import { TypeListComponent } from './components/type-list/type-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadmoreBtnComponent } from './components/loadmore-btn/loadmore-btn.component';
import { StatusGraphComponent } from './components/status-graph/status-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeCardComponent,
    PokeDetailsComponent,
    TypeListComponent,
    LoadmoreBtnComponent,
    StatusGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
