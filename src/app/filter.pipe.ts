import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString: any): any{
    if (searchString) {
      return value.filter((val: any) => val.indexOf(searchString)) >= 0;
    } else {
      return value;
    }
  }

}
