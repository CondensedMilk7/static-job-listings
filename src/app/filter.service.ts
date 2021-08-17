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
}
