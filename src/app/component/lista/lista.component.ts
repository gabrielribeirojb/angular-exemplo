import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listas:Lista[];

  constructor() { 
    this.listas = [
      {
        id:0,
        title:'Titulo 1'
      },
      {
        id:1,
        title:'Titulo 2'
      }
   ]  
  }

  ngOnInit(): void {
   
 

  }

}
