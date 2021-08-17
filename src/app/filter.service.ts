import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterService {
  activeTags = new Subject<any>();
  filterList = new Set();

  addTag(tag: string) {
    this.filterList.add(tag);
    this.activeTags.next(this.filterList);
  }

  removeTag(tag: string) {
    this.filterList.delete(tag);
    this.activeTags.next(this.filterList);
    this.activeTags.next();
  }

  clearFilter() {
    this.filterList.clear();
    this.activeTags.next(this.filterList);
  }

  filterData(data: object[]) {
    const filteredData = [];
    for (let company of data) {
      // if the company's values (Object.values(company): string[]) includes all the filter tags
      // push company to filteredData
      if (this.includesAll([...this.filterList], Object.values(company))) {
        filteredData.push(company);
      }
    }
    return filteredData;
  }

  private includesAll(needles: any[], haystack: any[]) {
    return needles.every((val) => {
      return haystack.indexOf(val) !== -1;
    });
  }
}
