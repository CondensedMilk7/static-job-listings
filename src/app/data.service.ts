import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import data from '../assets/data.json';
import { FilterService } from './filter.service';

export interface Company {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[] | [];
  tools: string[] | [];
}

@Injectable({ providedIn: 'root' })
export class DataService {
  filteredData = new Subject();

  constructor(private filterService: FilterService) {}

  fethchData() {
    return this.filterService.filterData(data);
  }
}
