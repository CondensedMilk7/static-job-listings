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
  }

  clearFilter() {
    this.filterList.clear();
    this.activeTags.next(this.filterList);
  }

  filterData(data: object[]) {
    const filteredData = new Set();
    for (let company of data) {
      // if the companies values (Object.values(company): string[]) includes all the filter tags
      // push company to filteredData
    }
    return [...filteredData];
  }

  private includesAll(needle: [], haystack: []) {}
}