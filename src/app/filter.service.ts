import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Company } from './data.service';

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

  filterData(data: Company[]) {
    const filteredData = [];
    for (let company of data) {
      // tags are defined by these properties only
      const companyValues = [
        company.role,
        company.level,
        ...company.languages,
        ...company.tools,
      ];
      // if the company's values include all the filter tags
      // push company to filteredData
      if (this.includesAll([...this.filterList], companyValues)) {
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
