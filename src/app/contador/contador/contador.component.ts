import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>
  <h3>La base es: <strong>{{base}}</strong></h3>
  <button (click)="acumular(base)" > +{{base}}</button>
  <h1>{{numb}}</h1>
  <button (click)="acumular(-base)" > -{{base}}</button>
  `
})
export class ContadorComponent{
    title = 'bases';
    public numb: number = 10;
    public base:number = 5;
  
    acumular(valor: number){
      this.numb +=valor;
    }
  
}
