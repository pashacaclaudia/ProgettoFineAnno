import { Component } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Utente}from './utente';
import {Utenti} from './mock-utenti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bacheca';
   myForm: FormGroup;
   utenti= Utenti;
    constructor(fb:FormBuilder)
    {
      this.myForm=fb.group({
          'nome':['', Validators.required],
          'cognome':['', Validators.required],
          'email':['', Validators.required],
          'user':['', Validators.required],
          'password':['', Validators.required],

      })
    }

     onSubmit(value: string): void {

    let utente: Utente = new Utente();
    utente.Nome = this.myForm.controls['nome'].value;
    utente.Cognome = this.myForm.controls['cognome'].value;
    utente.User = this.myForm.controls['user'].value;
    utente.Password = this.myForm.controls['password'].value;
    utente.Email = (this.myForm.controls['email'].value);


    this.utenti.push(utente);
  }
}
