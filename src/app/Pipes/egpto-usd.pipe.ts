import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EGPToUSD'
})
export class EGPToUSDPipe implements PipeTransform {

  transform(value:number): number {
    return value/15;
  }

}
