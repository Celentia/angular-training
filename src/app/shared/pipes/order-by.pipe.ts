import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, value: string, isAsc: boolean): any[] {
    if (!Array.isArray(array)) {
      return;
    }

    array.sort((x, y) => {
      const a = x[value];
      const b = y[value];

      if (isAsc === false) {
        return a === b ? 0 : a > b ? 1 : -1;
      }
      else {
        return a === b ? 0 : a < b ? 1 : -1;
      }
    });

    return array;
  }
}
