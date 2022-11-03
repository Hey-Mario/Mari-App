import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'barre'
})
export class BarrePipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): any {
    // if(value == true){
    //   return 
    // }
  }

}
