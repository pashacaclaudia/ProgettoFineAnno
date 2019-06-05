import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewUtentiComponent } from './view-utenti/view-utenti.component';
import { BachecaCommentiComponent } from './bacheca-commenti/bacheca-commenti.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewUtentiComponent,
    BachecaCommentiComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgbModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
