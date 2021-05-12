import { Component, Input, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import CalcKey from '../CalcTypes';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(
    private service: OperationsService
  ) { }

  @Input() key: CalcKey;

  click() {
    this.service.getKey(this.key)
  }

  ngOnInit(): void {
  }

}
