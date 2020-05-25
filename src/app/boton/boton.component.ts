import { Component, EventEmitter,OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  @Input()title:string='sin nombre';
  @Output()buttonclicked=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClickedFn(){
    this.buttonclicked.next(this.title);
  }

}
