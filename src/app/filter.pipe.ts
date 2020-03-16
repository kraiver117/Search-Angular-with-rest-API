import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any , searchText: string): any {
    // if (!items) {
    //   return [];
    // }
    // if (!searchText) {
    //   return items;
    // }
    // searchText = searchText.toLocaleLowerCase();
    // console.log(searchText);
    // return items.filter(it => {
    //   return it.toLocaleLowerCase().includes(searchText);
    // });

    if (searchText === '' || searchText.length < 1) { return items; }
    const resultUsers = [];

    for (const user of items) {
      if (user.first_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        resultUsers.push(user);
      }
    }
    return resultUsers;
  }



  }

