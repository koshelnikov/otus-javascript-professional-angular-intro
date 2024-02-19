import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercase'
})
export class LowercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(args)
    return value.toLowerCase();
  }

}
