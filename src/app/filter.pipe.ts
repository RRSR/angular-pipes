import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });
  }

}
