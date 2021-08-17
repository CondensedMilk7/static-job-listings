import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import data from '../assets/data.json';
import { FilterService } from './filter.service';

@Injectable({ providedIn: 'root' })
export class DataService {
  filteredData = new Subject();

  constructor(private filterService: FilterService) {}

  fethchData() {
    return this.filterService.filterData(data);
  }
}
