import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'fibonacci'
})
export class FibonacciPipe implements PipeTransform {

  @memo()
  transform(value: any, args?: any): any {
    console.log(value);
    return this.fibonacci(value);
  }

  public fibonacci(num: number): number {
    if(num === 1 || num === 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num -2);
  }

}