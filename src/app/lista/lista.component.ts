import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input()title:string='pera';

  constructor() { }

  ngOnInit(): void {
  }
  
  mostraralert(){
    alert('Ha costado');
  }

}
