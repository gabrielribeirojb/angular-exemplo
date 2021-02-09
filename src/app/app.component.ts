import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'lista-loja';
  
  constructor(){
    this.title = 'aula-2';
    this.trocarTitulo('Outro titulo');
  }

  trocarTitulo(title:string):void{
    this.title = title;
  }
}


