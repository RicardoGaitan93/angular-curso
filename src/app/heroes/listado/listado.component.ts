import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string [] = ['spiderman','ironman','hulk','thor'];
  heroesBorrar: string [] = [];
  heroeBorrado:string ='';
  constructor() { }

  ngOnInit(): void {
  }
  public borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
