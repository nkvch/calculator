import { Injectable, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import CalcKey from './CalcTypes';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() {  }

  actualOperation = null;

  operand = '';

  actualResult = '';

  getResult() {
    return this.actualResult;
  }

  getOperation() {
    if (this.actualOperation == this.addition) {
      return '+';
    } else if (this.actualOperation == this.subtraction) {
      return '-';
    } else if (this.actualOperation == this.multiplication) {
      return '*';
    } else if (this.actualOperation == this.division) {
      return '/';
    }
  }

  getOperand() {
    return this.operand;
  }

  addition(term1: string, term2: string) {
    return Number(term1) + Number(term2);
  }

  subtraction(minuend: string, subtrahend: string) {
    return Number(minuend) - Number(subtrahend);
  }

  division(dividend: string, divisior: string) {
    return Number(dividend)/Number(divisior);
  }

  multiplication(multiplier1: string, multiplier2) {
    return Number(multiplier1) * Number(multiplier2);
  }

  getKey(key: CalcKey) {
    if ( /^\d+$/.test(key) && !this.actualOperation) {
      this.actualResult += key;
    } else if (key == '+') {
      this.actualOperation = this.addition;
    } else if (key == '-') {
      this.actualOperation = this.subtraction;
    } else if (key == '/') {
      this.actualOperation = this.division;
    } else if (key == '*') {
      this.actualOperation = this.multiplication;
    } else if (/^\d+$/.test(key)) {
      this.operand += key;
    } else if (key == '=') {
      this.actualResult = this.actualOperation(this.actualResult, this.operand);
      this.actualOperation = null;
      this.operand = '';
    } else if (key == 'C') {
      this.actualResult = '';
      this.operand = '';
      this.actualOperation = null;
    }
  }
}
