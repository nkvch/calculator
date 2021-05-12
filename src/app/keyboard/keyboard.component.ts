import { Component, OnInit } from '@angular/core';
import CalcKey  from '../CalcTypes';
 
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor() { }

  keys: Array<Array<CalcKey>> = [
    ['7','8','9','+'],
    ['4','5','6','-'],
    ['1','2','3','*'],
    ['C','0','=','/']
  ]

  ngOnInit(): void {
  }

}
