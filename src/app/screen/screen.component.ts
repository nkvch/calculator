import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  constructor(
    private service: OperationsService
  ) {}

  actualResult = this.service.getResult();

  actualOperation = this.service.getOperation();

  operand = this.service.getOperand();

  ngOnInit(): void {
  }

  ngDoCheck() {
    if (this.service.getResult() != this.actualResult ||
     this.service.getOperation() != this.actualOperation ||
      this.service.getOperand() != this.operand) {
      this.actualResult = this.service.getResult();
      this.actualOperation = this.service.getOperation();
      this.operand = this.service.getOperand();
    }
  }

}
